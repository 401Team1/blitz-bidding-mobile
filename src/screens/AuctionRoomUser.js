import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import AuctionRoom from '../components/AuctionRoom'; // Import shared AuctionRoom component
import ItemDetailModal from '../components/ItemDetailsModal'; // Correct path to your ItemDetailModal
import { useSelector, useDispatch } from 'react-redux';
import { auctionEnded } from '../redux/Auction/index'; // Your action for ending the auction

const AuctionRoomUser = () => {
    const { currentItem, maxBid } = useSelector(state => state.auction);
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);

    

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text>{currentItem.name}</Text>
            </TouchableOpacity>
            <Text>Current highest bid: ${maxBid}</Text>
            <AuctionRoom />
            <ItemDetailModal
                currentItem={currentItem}
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
            />
        </SafeAreaView>
    );
};

export default AuctionRoomUser;