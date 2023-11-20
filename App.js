import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import { NativeBaseProvider, Box } from 'native-base';

import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config" // Optional if you want to use default theme

import { TouchableOpacity, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from './src/components/header';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import UserHome from './src/screens/UserHome';
import Footer from './src/components/footer';
import AuctionRoomUser from './src/screens/AuctionRoomUser';

import store from './src/redux';
import { NativeBaseProvider, Box } from 'native-base';
import { Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderMenu from './src/components/HeaderMenu';
import HeaderProfileMenu from './src/components/HeaderProfileMenu';



const Stack = createNativeStackNavigator();

const App = () => {

    const isAuth = true;

    return (
        <Provider store={store}>
            <GluestackUIProvider config={config}>
                <Box flex={1}>
                    <Header />
                    <NavigationContainer>
                        <Stack.Navigator
                        screenOptions={{
                            headerTitle: 'Blitz Bidding',
                            headerStyle: {
                                backgroundColor: '#D0BCD2',
                            },
                            headerTintColor: '',
                            headerLeft: HeaderMenu,
                            headerRight: HeaderProfileMenu,
                        }}
                    >
                        {isAuth ? (
                            <>
                                <Stack.Screen name="UserHome" component={UserHome} />
                                {/* <Stack.Screen name="AdminHome" component={AdminHome} /> */}
                                <Stack.Screen name="AuctionRoomUser" component={AuctionRoomUser} />
                                {/* <Stack.Screen name="MyAuction" component={MyAuction} /> */}
                                {/* <Stack.Screen name="Profile" component={Profile} /> */}
                                {/* <Stack.Screen name="SubmitItem" component={SubmitItem} /> */}
                            </>
                        ) : (
                            <>
                                <Stack.Screen name="Login" component={Login} />
                                <Stack.Screen name="Signup" component={Signup} />
                            </>
                        )}

                    </Stack.Navigator>
                    </NavigationContainer>
                    <Footer />
                </Box>
            </GluestackUIProvider>
        </Provider>
    );
};
export default App;