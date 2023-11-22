//https://gluestack.io/ui/docs/components/media-and-icons/icon

import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HStack, StatusBar } from '@gluestack-ui/themed';
import HeaderMenu from './HeaderMenu';
import HeaderProfileMenu from './HeaderProfileMenu';
import { AuthContext } from '../contexts/auth/AuthContext'

export default function BlitzHeader() {
    const navigation = useNavigation();
    const auth = useContext(AuthContext);

    const handleUserHomePress = () => {
        navigation.navigate('UserHome');
    };

    return (
        <>
            <StatusBar backgroundColor='#7e5287' />
            <SafeAreaView backgroundColor='#7e5287'>
                { !auth.isLoggedIn ? 
                    <HStack
                        justifyContent="center"
                        alignItems="center"
                        backgroundColor="#8d6096"
                        px={10}
                        py={5}
                    >
                        <Text px={10} py={5} mt={2} style={styles.headerText}>Blitz Bidding</Text>
                    </HStack> :
                    <HStack
                        justifyContent="space-between"
                        alignItems="center"
                        backgroundColor="#8d6096"
                        px={10}
                        py={5}
                    >
                        <HeaderMenu />
                        <TouchableOpacity onPress={handleUserHomePress}>
                            <Text style={styles.headerText}>Blitz Bidding</Text>   
                        </TouchableOpacity>
                        <HeaderProfileMenu />
                    </HStack>
                }
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    headerText: {
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
        alignItems: 'center',
        marginBottom: 5,
    }
})
