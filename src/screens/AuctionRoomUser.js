import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ItemDetailModal from '../components/ItemDetailsModal';
import ChatWindow from '../components/ChatWindow';
import { endAuction } from '../redux/Auction/index';

const AuctionRoomUser = () => {
    const { currentItem, maxBid } = useSelector(state => state.auction);
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);
    const [timer, setTimer] = useState(180);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);

            return () => clearInterval(interval);
        } else {
            dispatch(endAuction(currentItem));
        }
    }, [timer, currentItem, dispatch]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ""}${seconds}`;
    };

    // TODO: WebSocket logic for current highest bid
    // useEffect(() => {
    //     // Implement WebSocket subscription and state update logic here
    // }, []);

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text>{currentItem.name}</Text>
            </TouchableOpacity>
            <ItemDetailModal
                currentItem={currentItem}
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
            />
            <Text>Time left: {formatTime(timer)}</Text>
            <Text>Current highest bid: ${maxBid}</Text>
            <ChatWindow />
        </SafeAreaView>
    );
};

export default (AuctionRoomUser);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },

});