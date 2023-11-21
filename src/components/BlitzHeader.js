//https://gluestack.io/ui/docs/components/media-and-icons/icon

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HStack, StatusBar } from '@gluestack-ui/themed';
import HeaderMenu from './HeaderMenu';
import HeaderProfileMenu from './HeaderProfileMenu';


export default function BlitzHeader() {
    const navigation = useNavigation();

    const handleUserHomePress = () => {
        navigation.navigate('UserHome');
    };

    return (
        <>
            <StatusBar backgroundColor='#D0BCD2' />
            <SafeAreaView backgroundColor='#D0BCD2'>
                <HStack
                    justifyContent="space-between"
                    alignItems="center"
                    backgroundColor="#D0BCD2"
                    px={10}
                    py={5}
                >
                    <HeaderMenu />
                    <TouchableOpacity onPress={handleUserHomePress}>
                        <Text style={styles.headerText}>Blitz Bidding </Text>   
                    </TouchableOpacity>
                    <HeaderProfileMenu />
                </HStack>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    headerText: {
        color: '#FFF',
        fontSize: 25,
        fontWeight: 'bold',
        alignItems: 'center',
        marginBottom: 10,
    }
})
