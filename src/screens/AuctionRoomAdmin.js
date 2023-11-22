import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import AuctionRoom from '../components/AuctionRoom';
import { useSelector, useDispatch } from 'react-redux';
import { VStack, Heading, Button, ButtonText } from '@gluestack-ui/themed';

const AuctionRoomAdmin = () => {
    const { currentItem, nextItem, maxBid } = useSelector(state => state.auction);
    const dispatch = useDispatch();

    const endAuction = () => {
        dispatch(auctionEnded(currentItem));
    };

    const handleStartAuction = () => {
        dispatch(startAuction(nextItem));
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Heading lineHeight="$md">Admin Auction Room</Heading>
            <Text>Current highest bid: ${maxBid}</Text>
            <AuctionRoom />
            {/* Admin-specific controls can go here, such as displaying next item details */}
            <SafeAreaView>
                {/* <Text>Next Item: {nextItem.name}</Text> */}
            </SafeAreaView>
        </SafeAreaView>
    );
};

export default AuctionRoomAdmin;

