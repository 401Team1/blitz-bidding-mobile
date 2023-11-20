//https://gluestack.io/ui/docs/components/media-and-icons/icon

import React from "react";
import { Box, HStack, Icon, Text, StatusBar } from "@gluestack-ui/themed"

import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet } from "react-native";

const APP_BAR_HEIGHT = 60;

export default function Header() {
    return (
        <>
            <StatusBar bg="#3700B3" barStyle="light-content" />
            <Box safeAreaTop bg="violet.600" />
            <HStack bg="violet.600" px="1" py="3" justifyContent="space-between" alignItems="center" style={styles.header} >
                <HStack alignItems="center">
                    <Icon size="sm" as={MaterialIcons} name="menu" color="white" />
                    <Text style={styles.headerText}>
                        Blitz Bidding (TEST)
                    </Text>
                </HStack>
                <HStack>
                    <Icon size="sm" as={MaterialIcons} name="notifications-active" sz="sm" color="white" />
                    <Icon size="sm" as={MaterialIcons} name="account-circle" sz="sm" color="white" />
                </HStack>
            </HStack>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        position: "absolute",
        top: 0,
        width: "100%",
        height: APP_BAR_HEIGHT,
    },
    headerText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    }
})