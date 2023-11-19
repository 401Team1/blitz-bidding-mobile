import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const UserHomeScreen = ({ navigation }) => {
    // Dummy data for auctions
    const auctions = [
        // { date, itemName, description, picture, ... }
    ];

    const renderItem = ({ item }) => {
        return (
            <View>
                <Text>{item.date}</Text>
                <Text>{item.itemName}</Text>
                <Text>{item.description}</Text>
                {item.picture}
            </View>
        );
    };

    return (
        <SafeAreaView>
            <Carousel
                data={auctions}
                renderItem={renderItem}
                sliderWidth={50}
                itemWidth={50}
            />
            <Button title="Join Auction" onPress={() => navigation.navigate('AuctionRoomUser')} />
            <Button title="Submit Item" onPress={() => navigation.navigate('SubmitItem')} />
        </SafeAreaView>
    );
};

export default UserHomeScreen;