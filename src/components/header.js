import React from "react";
import { Box, HStack, Icon, IconButton, Text, StatusBar } from "@gluestack-ui/themed";
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet } from "react-native";

const APP_BAR_HEIGHT = 60;

const Header = ({ onNavigate }) => {
    const handleMenuPress = () => {
        onNavigate('UserHome');
    };

    return (
        <>
            <StatusBar bg="#3700B3" barStyle="light-content" />
            <Box safeAreaTop bg="violet.600" />
            <HStack bg="violet.600" px="1" py="3" justifyContent="space-between" alignItems="center" style={styles.header}>
                <HStack alignItems="center">
                    <IconButton onPress={handleMenuPress} icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
                    <Text style={styles.headerText}>Blitz Bidding</Text>
                </HStack>
                <HStack>
                    <IconButton icon={<Icon size="sm" as={MaterialIcons} name="notifications-active" color="white" />} />
                    <IconButton icon={<Icon size="sm" as={MaterialIcons} name="account-circle" color="white" />} />
                </HStack>
            </HStack>
        </>
    );
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
});

export default Header;