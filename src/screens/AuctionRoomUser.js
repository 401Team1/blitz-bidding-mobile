import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import AuctionRoom from '../components/AuctionRoom';
import Header from '../components/header';
import Footer from '../components/footer';
import ItemDetailModal from '../components/ItemDetailsModal';
import { useSelector, useDispatch } from 'react-redux';


const AuctionRoomUser = () => {
    const { currentItem, maxBid } = useSelector(state => state.auction);
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);

    

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header />
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
            <Footer />
        </SafeAreaView>
    );
};

export default AuctionRoomUser;