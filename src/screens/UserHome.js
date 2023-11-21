import React, { useEffect } from 'react';
import { SafeAreaView, 
         View, 
         Text, 
         Button, 
         Image, 
         Dimensions,
         StyleSheet } from 'react-native';
//import Carousel from 'react-native-snap-carousel';

import { useSelector, useDispatch } from 'react-redux';
import { setItems } from '../redux/Item'

// Carousel card image variables
export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const UserHomeScreen = ({ navigation }) => {
    const { items, currentAuctionItem } = useSelector(state => state.item);
    const dispatch = useDispatch(); // just leaving it here for now.

    useEffect(() => {
        dispatch(setItems());
        //console.log(items)
    }, [])

    //{item.picture}
    const renderItem = ({ item }) => {
        return (
            <View>
                <Text>{item.date}</Text>
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
                <Image
                    source={{ uri: item.picture }}
                    style={styles.image}
                />
            </View>
        );
    };

    /*
    <Carousel
    data={ items }
    renderItem={renderItem}
    sliderWidth={50}
    itemWidth={50}
/>
*/

    return (
        <SafeAreaView>

            <Button title="Join Auction" onPress={() => navigation.navigate('AuctionRoomUser')} />
            <Button title="Submit Item" onPress={() => navigation.navigate('SubmitItem')} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      borderRadius: 8,
      width: ITEM_WIDTH,
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
    image: {
      width: ITEM_WIDTH,
      height: 300,
    },
    header: {
      color: "#222",
      fontSize: 28,
      fontWeight: "bold",
      paddingLeft: 20,
      paddingTop: 20
    },
    body: {
      color: "#222",
      fontSize: 18,
      paddingLeft: 20,
      paddingLeft: 20,
      paddingRight: 20
    }
  })

export default UserHomeScreen;