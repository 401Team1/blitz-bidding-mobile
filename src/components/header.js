import React from "react";
import { HStack, IconButton, Icon, Text, Box, StatusBar } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const APP_BAR_HEIGHT = 32;

export default function Header() {
    return (
        <>
            <StatusBar bg="#3700B3" barStyle="light-content" />
            <Box safeAreaTop bg="viotlet.600" />
            <HStack bg="violet.600" px="1" py="3" justifyContent="space-between" alignItems="center" style={styles.header} >
                <HStack alignItems="center">
                    <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
                    <Text style={styles.headerText}>
                        Blitz Bidding
                    </Text>
                </HStack>
                <HStack>
                    <IconButton icon={<Icon size="sm" as={MaterialIcons} name="md-notifaction-icon" sz="sm" color="white" />} />
                    <IconButton icon={<Icon size="sm" as={MaterialIcons} name="user" sz="sm" color="white" />} />
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
        fontSize: "20",
        fontWeight: "bold",
    }
})