import React, { useState } from 'react';
import { SafeAreaView, Text, Flatlist, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { approveItem } from '../redux/Item';

const AdminHome = () => {
    const dispatch = useDispatch();
    const { items } = useSelector(state => state.item);
    const navigation = useNavigation();

    const handleApprove = (itemIdObj) => {
        dispatch(approveItem( itemIdObj ));
    };

    const renderItem = ({ item }) => {
        if (item.status !== 'approved') {
            return (
                <SafeAreaView style={{ padding: 10, borderBottomWidth: 1 }}>
                    <Text>{item.name}</Text>
                    <Text>{item.description}</Text>
                    <Button title='Approve' onPress={() => handleApprove({ id: item.id })} />
                </SafeAreaView>
            );
        }
        return null;
    };
    return (
        <SafeAreaView style={{ flex:1 }}>
            <FlatList
                data={items}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
            <TouchableOpacity onPress={() => navigation.navigate('AuctionRoomAdmin')}>
                <Text>Join Auction</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default AdminHome;