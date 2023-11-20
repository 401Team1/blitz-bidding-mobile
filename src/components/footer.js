import React from "react";
import { Text, View } from 'native-base'
import { StyleSheet } from "react-native";

export default function Footer() {
    return (
        <View style={styles.container}>
            <Text style={styles.footerText}>
                Blitz Bidding
            </Text>
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
        fontSize: 20,
        fontWeight: "bold",
    }
})