import React from 'react';
import { Provider } from 'react-redux';
import AuctionRoomUser from './src/screens/AuctionRoomUser';
import store from './src/redux';

export default function App() {
    return (
        <Provider store={store}>
            <AuctionRoomUser />
        </Provider>
    );
}