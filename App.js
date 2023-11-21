import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux';
import { GluestackUIProvider, Box, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { SafeAreaView, TouchableOpacity } from 'react-native';

import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import AdminHome from './src/screens/AdminHome';
import UserHome from './src/screens/UserHome';
import AuctionRoomUser from './src/screens/AuctionRoomUser';
import { NavigationContainer } from '@react-navigation/native';


import AuthProvider from './src/contexts/auth/AuthContext'

import Profile from './src/screens/Profile';


const App = () => {
    const [currentScreen, setCurrentScreen] = useState('Login');

    return (
        <AuthProvider>
        <Provider store={store}>
            <GluestackUIProvider config={config}>
                <SafeAreaView style={{ flex: 1 }}>
                    <NavigationContainer>
                    {/* <Header onNavigate={setCurrentScreen} /> */}
                    <Box flex={1}>
                        {currentScreen === 'Login' && <Login onNavigate={setCurrentScreen} />}
                        {currentScreen === 'Signup' && <Signup onNavigate={setCurrentScreen} />}
                        {currentScreen === 'UserHome' && <UserHome onNavigate={setCurrentScreen} />}
                        {currentScreen === 'AdminHome' && <AdminHome onNavigate={setCurrentScreen} />}
                        {/* Add other screens */}
                    </Box>
                    <Footer />
                    </NavigationContainer>
                </SafeAreaView>
            </GluestackUIProvider>
        </Provider>
        </AuthProvider>
    );
};

export default App;
