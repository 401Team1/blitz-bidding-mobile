// import React, { useEffect } from 'react';
// import { SafeAreaView, View, Text, Button, Image, Dimensions, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// //import Carousel from 'react-native-snap-carousel';

// import { useSelector, useDispatch } from 'react-redux';

// // Carousel card image variables
// export const SLIDER_WIDTH = Dimensions.get('window').width + 80
// export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

// const UserHome = () => {
//   const navigation = useNavigation();
//     //const { items, currentAuctionItem } = useSelector(state => state.item);
//     //const dispatch = useDispatch(); // just leaving it here for now.

//     /*
//     useEffect(() => {
//         dispatch(setItems());
//         console.log(items)
//     }, [])
//     */

//     //{item.picture}
//     const renderItem = ({ item }) => {
//         return (
//             <View>
//                 <Text>{item.date}</Text>
//                 <Text>{item.name}</Text>
//                 <Text>{item.description}</Text>
//                 <Image
//                     source={{ uri: item.picture }}
//                     style={styles.image}
//                 />
//             </View>
//         );
//     };

//     /*
//     <Carousel
//     data={ items }
//     renderItem={renderItem}
//     sliderWidth={50}
//     itemWidth={50}
// />
// */

//     return (
//         <SafeAreaView>

//             <Button title="Join Auction" onPress={() => navigation.navigate('AuctionRoomUser')} />
//             <Button title="Submit Item" onPress={() => navigation.navigate('SubmitItem')} />
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//       backgroundColor: 'white',
//       borderRadius: 8,
//       width: ITEM_WIDTH,
//       paddingBottom: 40,
//       shadowColor: "#000",
//       shadowOffset: {
//         width: 0,
//         height: 3,
//       },
//       shadowOpacity: 0.29,
//       shadowRadius: 4.65,
//       elevation: 7,
//     },
//     image: {
//       width: ITEM_WIDTH,
//       height: 300,
//     },
//     header: {
//       color: "#222",
//       fontSize: 28,
//       fontWeight: "bold",
//       paddingLeft: 20,
//       paddingTop: 20
//     },
//     body: {
//       color: "#222",
//       fontSize: 18,
//       paddingLeft: 20,
//       paddingLeft: 20,
//       paddingRight: 20
//     }
//   })

// export default UserHome;

import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MyAuctions from './MyAuctions';

const UserHome = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <MyAuctions />
      <View style={styles.buttonContainer}>
        <Button
          title="Join Auction"
          onPress={() => navigation.navigate('AuctionRoomUser')}
          color="#7e5287" // Custom color
          style={styles.button}
        />
        <Button
          title="Submit Item"
          onPress={() => navigation.navigate('SubmitItem')}
          color="#7e5287" // Custom color
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Align buttons at the bottom
    backgroundColor: '#ffffff', // Background color
  },
  buttonContainer: {
    flexDirection: 'row', // Horizontal layout for buttons
    justifyContent: 'space-around', // Space evenly
    marginVertical: 20, // Add margin between buttons and the bottom
  },
  button: {
    fontSize: 60,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default UserHome;