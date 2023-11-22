import React, { useState } from 'react';
import { GluestackUIProvider, Box } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import store from './src/redux';
import { Provider } from 'react-redux';

import BlitzHeader from './src/components/BlitzHeader';
import Footer from './src/components/footer.js';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import AdminHome from './src/screens/AdminHome';
import UserHome from './src/screens/UserHome';
import AuctionRoomUser from './src/screens/AuctionRoomUser';
import AuctionRoomAdmin from './src/screens/AuctionRoomAdmin.js';
import MyAuctions from './src/screens/MyAuctions.js';
import SubmitItem from './src/screens/SubmitItem.js';
import Profile from './src/screens/Profile';

import AuthProvider from './src/contexts/auth/AuthContext'
import { ScreenProvider, useScreen } from './src/contexts/ScreenContext';

const Stack = createNativeStackNavigator();

const App = () => {
    const [currentScreen, setCurrentScreen] = useState('Login');

    return (
        <AuthProvider>
            <Provider store={store}>
                <GluestackUIProvider config={config}>
                    <ScreenProvider>
                        <Box flex={1}>
                            <NavigationContainer>
                                <BlitzHeader />
                                <Stack.Navigator 
                                    screenOptions={{headerShown: false}}
                                >
                                    <Stack.Screen name="Login" component={Login} />
                                    <Stack.Screen name="UserHome" component={UserHome} />
                                    <Stack.Screen name="AdminHome" component={AdminHome} />
                                    <Stack.Screen name="AuctionRoomUser" component={AuctionRoomUser} />
                                    <Stack.Screen name="AuctionRoomAdmin" component={AuctionRoomAdmin} />
                                    <Stack.Screen name="MyAuctions" component={MyAuctions} />
                                    <Stack.Screen name="Profile" component={Profile} />
                                    <Stack.Screen name="Signup" component={Signup} />
                                    <Stack.Screen name="SubmitItem" component={SubmitItem} />
                                </Stack.Navigator>
                                <Footer />
                            </NavigationContainer>
                        </Box>
                    </ScreenProvider>
                </GluestackUIProvider>
            </Provider>
        </AuthProvider>
    );
};

export default App;
