import React, { useState } from 'react';
import { Provider } from 'react-redux';
import Header from './src/components/header';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import UserHome from './src/screens/UserHome';
import Footer from './src/components/footer';
import AuctionRoomUser from './src/screens/AuctionRoomUser';
import store from './src/redux';
import { NativeBaseProvider, Box } from 'native-base';
import { Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// export default function App() {
//     const [role, setRole] = useState('user');

//     return (
//         <Provider store={store}>
//             <NativeBaseProvider>
//             <SafeAreaView style={{ flex: 1 }}>
//                 {role === 'user' ? (
//                     <AuctionRoomUser />
//                 ) : (
//                     <AuctionRoomAdmin />
//                 )}
//                 {/* Toggle Button for testing */}
//                 <TouchableOpacity onPress={() => setRole(role === 'user' ? 'admin' : 'user')} style={{ padding: 10, backgroundColor: 'lightblue' }}>
//                     <Text>Switch to {role === 'user' ? 'Admin' : 'User'} View</Text>
//                 </TouchableOpacity>
//             </SafeAreaView>
//             </NativeBaseProvider>
//         </Provider>
//     );
// }

const Stack = createNativeStackNavigator();
//
const App = () => {
    return (
        <Provider store={store}>
            <NativeBaseProvider>
                <Box flex={1}>
                    <Header />
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName="Login">
                            <Stack.Screen name="Login" component={Login} />
                            <Stack.Screen name="Signup" component={Signup} />
                            <Stack.Screen name="UserHome" component={UserHome} />
                            <Stack.Screen name="AuctionRoomUser" component={AuctionRoomUser} />
                            {/* Other screens */}
                        </Stack.Navigator>
                    </NavigationContainer>
                    <Footer />
                </Box>
            </NativeBaseProvider>
        </Provider>
    );
};
export default App;