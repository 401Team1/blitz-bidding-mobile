import React, { useState, useContext } from 'react';
import { GluestackUIProvider, Box, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import store from './src/redux';
import { Provider } from 'react-redux';

import BlitzHeader from './src/components/BlitzHeader';
import Footer from './src/components/footer.js';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';


//import AdminHome from './src/screens/AdminHome'; // uncomment once screen is ready
import UserHome from './src/screens/UserHome';
import AuctionRoomUser from './src/screens/AuctionRoomUser';

import AuthProvider from './src/contexts/auth/AuthContext'
import { ScreenProvider, useScreen } from './src/contexts/ScreenContext';

import Profile from './src/screens/Profile';

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
                                    {/* <Stack.Screen name="AppContent" component={AppContent} /> */}
                                    <Stack.Screen name="UserHome" component={UserHome} />
                                    <Stack.Screen name="AuctionRoomUser" component={AuctionRoomUser} />
                                    <Stack.Screen name="Login" component={Login} />
                                    {/* <Stack.Screen name="MyAuction" component={MyAuction} /> */}
                                    <Stack.Screen name="Profile" component={Profile} />
                                    <Stack.Screen name="Signup" component={Signup} />
                                    {/* <Stack.Screen name="SubmitItem" component={SubmitItem} /> */}
                                </Stack.Navigator>
                                {/* <AppContent /> */}
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
