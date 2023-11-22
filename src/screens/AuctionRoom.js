import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, Modal } from 'react-native';
import ChatWindow from '../components/ChatWindow';
import SendBid from '../components/Auction/SendBid'
import { useSelector, useDispatch } from 'react-redux';
import { VStack, Heading, Button, ButtonText, Center, Image } from '@gluestack-ui/themed';

import { startAuction, endAuction } from '../redux/Auction/index';
import StartAuction from '../components/Auction/StartAuction/index';
import EndAuction from '../components/Auction/EndAuction/index';

import { AuthContext } from '../contexts/auth/AuthContext';

const pics = {
    'aabbccdd112233': require('../images/pikachu.jpg'),
    'aabbccdd223344': require('../images/twilight.jpg'),
    'hghwqtoos234': require('../images/pearl_earring.jpg'),
    'spdr13513588': require('../images/spiderman.jpg'),
}

const AuctionRoom = () => {
    const [timer, setTimer] = useState(0);
    const { user } = useContext(AuthContext);
    const dispatch = useDispatch();
    const { currentItem, maxBid, maxBidder, auctionStarted } = useSelector(state => state.auction);
    const [modalVisible, setModalVisible] = useState(false);



    // When state.auctionStarted is changed by a new auction starting, start the timer.
    // Time left should be based on how many seconds are left between current time and time started.
    // Once timer hits zero - admin should end auction

/*
    <ItemDetailModal
                currentItem={currentItem}
                picture={ currentItem ? pics[currentItem.id] : null }
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
            />
*/



    useEffect(() => {
        if ( auctionStarted ) {
            // Calculate auction end time (start + 3 min)
            // + (180 * 1000)
            const auctionEndTime = Math.floor(auctionStarted / 1000) + 182;
            
            // Get the current timestamp in seconds
            const currentTimestamp = Math.floor(Date.now() / 1000);
            
            // Calculate the difference in seconds
            const secondsRemaining = (auctionEndTime - currentTimestamp);

            // Set timer to how many seconds are left until auction end
            setTimer( secondsRemaining );            
        } else {
            setTimer(0);
        }
    }, [auctionStarted])

    useEffect(() => {     
        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
        } else {
            //dispatch(endAuction()); // Dispatch an action to end the auction
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timer, dispatch]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <SafeAreaView style={styles.container}>
        { currentItem ? 
            <>
                <Center>
                    <Text style={ styles.itemDescHeader }>Current Item:</Text>
                    <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.itemButton}>
                        <Center>
                            <Image style={ styles.currItemImage } height={120} width={120} alt={'image of auction item'} 
                                   source={ pics[currentItem.id] }
                            />
                            <Text style={ styles.currItemName }>{currentItem.name}</Text>
                            <Text style={ styles.currItemDescription }>{currentItem.description}</Text>
                            </Center>
                    </TouchableOpacity>
                    <Text style={ styles.maxBidText }>Current highest bid: ${maxBid}</Text>
                    <Text style={ styles.timer }>Time left: {formatTime(timer)}</Text>
                </Center>
                </> : <Center><Heading>Auction has not started.</Heading></Center>
        }
            <View style={styles.chatContainer}>
                <ChatWindow />
            </View>

            <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={ () => {} }
            >
            <SafeAreaView style={styles.modalOverlay}>
                <SafeAreaView style={styles.modalContent}>
                    <Center style={styles.modalContent}>
                    <Image
                        source={ currentItem ? pics[currentItem.id] : null }
                        style={styles.image}
                        alt={'picture of auction'}
                    />
                    <Text style={styles.currentItemName}>{currentItem?.name}</Text>
                    <Text>{currentItem?.description}</Text>
                    <Text>Seller: {currentItem?.seller}</Text>
                    </Center>
                    <TouchableOpacity onPress={() => { setModalVisible(false) }} style={styles.closeButton}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </SafeAreaView>
        </Modal>
        
        { 
            user.role === 'admin' ?
            <>
                <StartAuction dispatch={dispatch} />
                <EndAuction dispatch={dispatch} />
            </> : 
                <SendBid dispatch={dispatch} style={styles.input} />
        }
        </SafeAreaView>
    );
};




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    timer: {
        fontSize: 16,
        marginVertical: 10,
        alignSelf: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        borderRadius: 20,
        marginBottom: 10,
    },
    chatContainer: {
        flex: 1,
        borderWidth: 2,
        width: 'auto',
        borderColor: '#8d6096',
        borderRadius: 10,
        padding: 5,
        marginVertical: 10,
        margin: 10
    },
    itemDescHeader: {
        marginTop: 8,
        marginBottom: 2,
        fontSize: 18,
    },
    currItemImage: {
        marginBottom: 8,
    },
    currItemName: {
        fontSize: 15,
    },
    currItemDescription: {
        fontSize: 12,
        color: 'grey'
    },
    maxBidText: {
        fontSize: 20,
        marginTop: 8,
    },
    itemButton: {
        padding: 10,
        borderRadius: 15,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 40,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 5,
    },
    image: {
        width: 100,
        height: 200, // fixed height for the image
    },
    closeButton: {
        marginTop: 10,
        backgroundColor: '#e0e0e0',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'flex-end',
    },
});


export default AuctionRoom;