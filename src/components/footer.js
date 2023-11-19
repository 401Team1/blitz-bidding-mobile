import React from "react";
import { Text, View, StyleSheet } from 'react-native'

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>
                Blitz Bidding
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        w: "100%",
        bg: "violet.600",
        px: 1,
        py: 1.5,
    },
    footerText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    }
})