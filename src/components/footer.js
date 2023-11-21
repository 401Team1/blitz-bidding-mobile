import React from "react";
import { View, Text, Center } from '@gluestack-ui/themed'
import { StyleSheet } from "react-native";

export default function Footer() {
    return (
        <View style={styles.container}>
            <Center >
            <Text style={styles.footerText}>
            &copy; Blitz Bidding
            </Text>
            </Center>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '6%',
        alignContent: 'center',
        backgroundColor: "#8d6096",
        paddingTop: 6,
    },
    footerText: {
        fontSize: 15,
        // fontWeight: "bold",
        color: '#FFF'
    }
})