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
          onPress={() => navigation.navigate('AuctionRoom')}
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