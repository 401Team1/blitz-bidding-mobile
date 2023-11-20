import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { startAuction } from '../../../redux/Auction';

export default StartAuction = ({ dispatch, style }) => {
    //const [bid, setBid] = useState(0);

    const handleStartAuction = () => {
        dispatch(startAuction());
    };

    return (
        <>
            <Button title="Start Auction" onPress={handleStartAuction} />
        </>
    )
}