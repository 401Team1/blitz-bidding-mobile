import React, { useState } from 'react';
import { Provider } from 'react-redux';
import AuctionRoomUser from './src/screens/AuctionRoomUser';
import AuctionRoomAdmin from './src/screens/AuctionRoomAdmin';
import store from './src/redux';
import { Text, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
    const [role, setRole] = useState('user');
    return (
        <Provider store={store}>
            <SafeAreaView style={{ flex: 1 }}>
                {role === 'user' ? (
                    <AuctionRoomUser />
                ) : (
                    <AuctionRoomAdmin />
                )}
                {/* Toggle Button for testing */}
                <TouchableOpacity onPress={() => setRole(role === 'user' ? 'admin' : 'user')} style={{ padding: 10, backgroundColor: 'lightblue' }}>
                    <Text>Switch to {role === 'user' ? 'Admin' : 'User'} View</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </Provider>
    );
}