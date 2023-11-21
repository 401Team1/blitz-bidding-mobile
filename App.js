import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './src/redux';
import { GluestackUIProvider, Box } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { ScreenProvider, useScreen } from './src/contexts/ScreenContext';
import BlitzHeader from './src/components/BlitzHeader';
import Footer from './src/components/footer';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import AdminHome from './src/screens/AdminHome';
import UserHome from './src/screens/UserHome';
import AuctionRoomUser from './src/screens/AuctionRoomUser';

import { Text, TouchableOpacity, SafeAreaView } from 'react-native';


import AuthProvider from './src/contexts/auth/AuthContext'

import Profile from './src/screens/Profile';


const Stack = createNativeStackNavigator();

const isAuth = true;

const AppContent = () => {
    const { currentScreen } = useScreen();
    const screenComponents = {
        Login: <Login />,
        Signup: <Signup />,
        UserHome: <UserHome />,
        AuctionRoomUser: <AuctionRoomUser />,
        // Add other screens here 
    };
    return screenComponents[currentScreen] || <Text>Screen not found</Text>;
};

const App = () => {
    return (
        <AuthProvider>
        <Provider store={store}>
            <GluestackUIProvider config={config}>
                <ScreenProvider>
                    <NavigationContainer>
                        <Stack.Navigator headerMode="none">
                            <Stack.Screen name="AppContent" component={AppContent} />
                            <Stack.Screen name="AdminHome" component={AdminHome} />
                            <Stack.Screen name="UserHome" component={UserHome} />
                            <Stack.Screen name="AuctionRoomUser" component={AuctionRoomUser} />
                            <Stack.Screen name="Login" component={Login} />
                            {/* <Stack.Screen name="MyAuction" component={MyAuction} /> */}
                            <Stack.Screen name="Profile" component={Profile} />
                            <Stack.Screen name="Signup" component={Signup} />
                            {/* <Stack.Screen name="SubmitItem" component={SubmitItem} /> */}
                        </Stack.Navigator>
                        <Box flex={1}>
                            <BlitzHeader />
                            <Footer />
                        </Box>
                    </NavigationContainer>
                </ScreenProvider>
            </GluestackUIProvider>
        </Provider>
        </AuthProvider>
    );
};

export default App;
