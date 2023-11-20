//https://gluestack.io/ui/docs/components/media-and-icons/icon

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HStack } from '@gluestack-ui/themed';
import HeaderMenu from './HeaderMenu';
import HeaderProfileMenu from './HeaderProfileMenu';

const Header = () => {
    const navigation = useNavigation();

    const handleUserHomePress = () => {
        navigation.navigate('UserHome');
    };

    return (
        <HStack
            justifyContent="space-between"
            alignItems="center"
            p="$2"
            backgroundColor="#D0BCD2"
        >
            <HeaderMenu />
            
            <TouchableOpacity onPress={handleUserHomePress}>
                <Text style={{ color: '#FFF' }}>Go to User Home</Text>
            </TouchableOpacity>

            <HeaderProfileMenu />
        </HStack>
    );
};

export default Header;


// {/* <NavigationContainer>
//                 <Stack.Navigator
//                     screenOptions={{
//                         headerLargeTitle: 'Blitz Bidding',
//                         headerStyle: {
//                             backgroundColor: '#D0BCD2',
//                         },
//                         headerTintColor: '#FFF',
//                         headerLeft: HeaderMenu,
//                         headerRight: HeaderProfileMenu,
//                     }}
//                 >
//                     {isAuth ? (
//                         <>
//                             <Stack.Screen name="UserHome" component={UserHome} />
//                             {/* <Stack.Screen name="AdminHome" component={AdminHome} /> */}
//                             <Stack.Screen name="AuctionRoomUser" component={AuctionRoomUser} />
//                             {/* <Stack.Screen name="MyAuction" component={MyAuction} /> */}
//                             {/* <Stack.Screen name="Profile" component={Profile} /> */}
//                             {/* <Stack.Screen name="SubmitItem" component={SubmitItem} /> */}
//                         </>
//                     ) : (
//                         <>
//                             <Stack.Screen name="Login" component={Login} />
//                             <Stack.Screen name="Signup" component={Signup} />
//                         </>
//                     )}

//                 </Stack.Navigator>
//             </NavigationContainer> */}