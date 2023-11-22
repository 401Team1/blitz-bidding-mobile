import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AuctionRoom from '../components/AuctionRoom';
import { VStack, Heading, Button, ButtonText } from '@gluestack-ui/themed';

import ItemDetailModal from '../components/ItemDetailsModal';
import { useSelector, useDispatch } from 'react-redux';
import ChatWindow from '../components/ChatWindow';


const AuctionRoomUser = () => {
    const { currentItem, maxBid } = useSelector(state => state.auction);
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);

    //<Header />
    //<Footer />
    return (
        <SafeAreaView style={styles.container}>
            <VStack space="xxl">
                <Heading lineHeight="$md">Auction Room</Heading>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.itemButton}>
                    <Text style={styles.itemText}>{currentItem ? currentItem.name : 'No Current Item'}</Text>
                </TouchableOpacity>
                <Text style={styles.bidText}>Current highest bid: ${maxBid}</Text>
                <AuctionRoom />
                <ItemDetailModal
                    currentItem={currentItem}
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                />
            </VStack>
        </SafeAreaView>
    );
};

export default AuctionRoomUser;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemButton: {
        padding: 10,
        backgroundColor: '#8d6096',
        borderRadius: 15,
    },
    itemText: {
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bidText: {
        marginTop: 10,
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
});