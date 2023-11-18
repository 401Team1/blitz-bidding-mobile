import React from "react";
import { Text, Box, StyleSheet } from 'react-native'

export default function Footer() {
    return (
        <Box stlye={styles.footer}>
            <Text style={styles.footerText}>
                Blitz Bidding
            </Text>
        </Box>
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
        fontSize: "20",
        fontWeight: "bold",
    }
})