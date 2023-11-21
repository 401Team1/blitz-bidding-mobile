import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import ChatWindow from './ChatWindow';
import SendBid from './Auction/SendBid'
import { useSelector, useDispatch } from 'react-redux';

import { startAuction, endAuction } from '../redux/auction/index';
import StartAuction from './Auction/StartAuction/index';
import EndAuction from './Auction/EndAuction/index';

const AuctionRoom = () => {
    const [timer, setTimer] = useState(0);
    const dispatch = useDispatch();
    const { currentItem, maxBid, maxBidder, auctionStarted } = useSelector(state => state.auction);

    // When state.auctionStarted is changed by a new auction starting, start the timer.
    // Time left should be based on how many seconds are left between current time and time started.
    // Once timer hits zero - admin should end auction

    useEffect(() => {
        if ( auctionStarted ) {
            // Calculate auction end time (start + 3 min)
            // + (180 * 1000)
            const auctionEndTime = Math.floor(auctionStarted / 1000) + 180;
            
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

    // I put the StartAuction button in there just for testing/dev use.
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.timer}>Time left: {formatTime(timer)}</Text>
            <ChatWindow />
            <SendBid dispatch={dispatch} style={ styles.input } />
            <StartAuction dispatch={dispatch} />
            <EndAuction dispatch={dispatch} />
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
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 20,
        marginBottom: 10,
    },
});

export default AuctionRoom;