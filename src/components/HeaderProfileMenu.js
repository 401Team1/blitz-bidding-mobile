import React from "react";
import { Menu, MenuItem, MenuItemLabel, Icon, Pressable, GlobeIcon, AlertCircleIcon } from '@gluestack-ui/themed';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";


export default function HeaderProfileMenu() {

  const navigation = useNavigation();
  return (
    <Menu
      trigger={({ ...triggerProps }) => {
        return (
          <Pressable accessibilityLabel="User Profile Options" {...triggerProps}>
            <Icon as={Ionicons} name="person" color='#FFF' size="lg" />
          </Pressable>
        )
      }}
    >

      <MenuItem key="Profile" textValue="Profile" onPress={() => navigation.navigate('Profile')}>
        <Icon as={AlertCircleIcon} size="sm" mr="$2" />
        <MenuItemLabel size="sm">My Profile</MenuItemLabel>
      </MenuItem>
      <MenuItem key="Logout" textValue="Logout" onPress={() => navigation.navigate('Login')}>
        <Icon as={GlobeIcon} size="sm" mr="$2" />
        <MenuItemLabel size="sm">Logout</MenuItemLabel>
      </MenuItem>
    </Menu>
  )
}