import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { endAuction } from '../../../redux/Auction';

export default EndAuction = ({ dispatch, style }) => {
    //const [bid, setBid] = useState(0);

    const handleEndAuction = () => {
        dispatch(endAuction());
    };

    return (
        <>
            <Button title="End Auction" onPress={handleEndAuction} />
        </>
    )
}