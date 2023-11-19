import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import ChatWindow from './ChatWindow';
import { useDispatch } from 'react-redux';
import { endAuction } from '../redux/Auction/index';

const AuctionRoom = () => {
    const [timer, setTimer] = useState(180);
    const dispatch = useDispatch();

    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
        } else {
            dispatch(endAuction()); // Dispatch an action to end the auction
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
            <Text style={styles.timer}>Time left: {formatTime(timer)}</Text>
            <ChatWindow />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    timer: {
        fontSize: 18,
        marginVertical: 10,
        alignSelf: 'center',
    },
});

export default AuctionRoom;