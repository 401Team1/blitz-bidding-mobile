// import React, { useState } from 'react';
// import { SafeAreaView, Text, Flatlist, Button, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { FlatList } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// //import { approveItem } from '../redux/Item';

// const AdminHome = () => {
//     const dispatch = useDispatch();
//     //const { items } = useSelector(state => state.item);
//     const navigation = useNavigation();

//     /*
//     const handleApprove = (itemIdObj) => {
//         dispatch(approveItem( itemIdObj ));
//     };
//     */

//     /*
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
//     */
//     return (
//         <SafeAreaView style={{ flex:1 }}>
//             <TouchableOpacity onPress={() => navigation.navigate('AuctionRoomAdmin')}>
//                 <Text>Join Auction</Text>
//             </TouchableOpacity>
//         </SafeAreaView>
//     );
// };

// export default AdminHome;

/*
            <FlatList
                data={items}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />

*/

import React from 'react';
import { SafeAreaView, View, Text, Button, Image, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

// Carousel card image variables
export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const AdminHome = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
//   const itemsToApprove = useSelector((state) => state.item.itemsToApprove); // Assuming you have a Redux state for items to approve

  const handleApproveItem = (itemId) => {
    // Implement logic to approve the item with the given itemId
    // You can dispatch an action to update the item's status
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Items to Approve</Text>
          {/* {itemsToApprove.map((item) => (
            <View key={item.id} style={styles.item}>
              <Image source={{ uri: item.picture }} style={styles.image} />
              <Text>{item.name}</Text>
              <Button title="Approve" onPress={() => handleApproveItem(item.id)} />
            </View>
          ))} */}
        </View>
      </ScrollView>
      <View style={styles.bottomButton}>
        <Button title="Join Auction" color='black' onPress={() => navigation.navigate('AuctionRoom')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
    marginBottom: 10,
  },
  bottomButton: {
    marginTop: 20,
    borderWidth: 5,
    borderRadius: 10,
    borderColor: '#7e5287',
    marginBottom: 40,
  },
});

export default AdminHome;
