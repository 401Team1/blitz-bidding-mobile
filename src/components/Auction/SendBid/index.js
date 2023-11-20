import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { sendBid } from '../../../redux/Auction';

export default SendBid = ({ dispatch, style }) => {
    const [bid, setBid] = useState(0);
    

    const handleBid = () => {
        dispatch(sendBid({ username: 'CurrentUsername', bid }));
    };

    return (
        <>
            <TextInput
                style={ style }
                keyboardType = 'numeric'
                value={bid}
                onChangeText={setBid}
                placeholder="Enter amount..."
            />
            <Button title="Bid" onPress={handleBid} />
        </>
    )
}