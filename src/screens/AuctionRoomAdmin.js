import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuctionRoom from '../components/AuctionRoom';
import { useSelector, useDispatch } from 'react-redux';
import { startAuction, auctionEnded } from '../redux/auction/index';

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
            <Text>Auction Room Admin View</Text>
            <Text>Current highest bid: ${maxBid}</Text>
            <AuctionRoom endAuction={endAuction} />
            {/* Admin-specific controls can go here, such as displaying next item details */}
            <SafeAreaView>
                <Text>Next Item: {nextItem.name}</Text>
                <TouchableOpacity onPress={handleStartAuction} style={{ padding: 10, backgroundColor: 'lightblue' }}>
                    <Text>Start Auction For Next Item</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
    );
};

export default AuctionRoomAdmin;

