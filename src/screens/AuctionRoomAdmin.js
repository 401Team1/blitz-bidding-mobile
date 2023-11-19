import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';
import AuctionRoom from '../components/AuctionRoom';
import { useSelector, useDispatch } from 'react-redux';
import { startAuction, auctionEnded } from '../redux/Auction/index';

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
            <Header />
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
            <Footer />
        </SafeAreaView>
    );
};

export default AuctionRoomAdmin;

