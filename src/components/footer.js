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
        height: '7%',
        backgroundColor: "#D0BCD2",
        paddingTop: 15,
    },
    footerText: {
        fontSize: 15,
        // fontWeight: "bold",
        color: '#FFF'
    }
})