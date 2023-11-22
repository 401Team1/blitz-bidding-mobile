import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import AuctionRoom from '../components/AuctionRoom';

import ItemDetailModal from '../components/ItemDetailsModal';
import { useSelector, useDispatch } from 'react-redux';


const AuctionRoomUser = () => {
    const { currentItem, maxBid } = useSelector(state => state.auction);
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);

    //<Header />
    //<Footer />
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text>{currentItem ? currentItem.name : null}</Text>
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