import React from 'react';
import { Box, Text, View } from '@gluestack-ui/themed';
import { SafeAreaView, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AdminHome() {
    const navigation = useNavigation();
    const handlePress = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Box style={{ flex: 1 }}>
                <View>
                    <Text>Welcome back Admin! What would you like to do? </Text>
                    <Button title="Join Auction" onPress={() => handlePress('AuctionRoomAdmin')} />
                    <Button title="Review Auctions" onPress={() => handlePress('ReviewAuctions')} />
                </View>
            </Box>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingBottom: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
});


// import React, { useState } from 'react';
// import { SafeAreaView, Text, Flatlist, Button, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { FlatList } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { approveItem } from '../redux/Item';

// const AdminHome = () => {
//     const dispatch = useDispatch();
//     const { items } = useSelector(state => state.item);
//     const navigation = useNavigation();

//     const handleApprove = (itemIdObj) => {
//         dispatch(approveItem( itemIdObj ));
//     };

//     const renderItem = ({ item }) => {
//         if (item.status !== 'approved') {
//             return (
//                 <SafeAreaView style={{ padding: 10, borderBottomWidth: 1 }}>
//                     <Text>{item.name}</Text>
//                     <Text>{item.description}</Text>
//                     <Button title='Approve' onPress={() => handleApprove({ id: item.id })} />
//                 </SafeAreaView>
//             );
//         }
//         return null;
//     };
//     return (
//         <SafeAreaView style={{ flex:1 }}>
//             <FlatList
//                 data={items}
//                 keyExtractor={item => item.id}
//                 renderItem={renderItem}
//             />
//             <TouchableOpacity onPress={() => navigation.navigate('AuctionRoomAdmin')}>
//                 <Text>Join Auction</Text>
//             </TouchableOpacity>
//         </SafeAreaView>
//     );
// };

// export default AdminHome;