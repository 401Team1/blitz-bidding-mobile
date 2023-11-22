import React, { useContext } from "react";
import { Menu, MenuItem, MenuItemLabel, Icon, Pressable, GlobeIcon, AlertCircleIcon } from '@gluestack-ui/themed';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../contexts/auth/AuthContext";

export default function HeaderProfileMenu() {

  const navigation = useNavigation();
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigation.navigate('Login')
  }

  return (
    <Menu
      trigger={({ ...triggerProps }) => {
        return (
          <Pressable accessibilityLabel="User Profile Options" {...triggerProps}>
            <Icon as={Ionicons} name="person" color='#FFFFFF' size="xl" />
          </Pressable>
        )
      }}
    >

      <MenuItem key="Profile" textValue="Profile" onPress={() => navigation.navigate('Profile')}>
        <Icon as={AlertCircleIcon} size="sm" mr="$2" />
        <MenuItemLabel size="sm">My Profile</MenuItemLabel>
      </MenuItem>
      
      <MenuItem key="Logout" textValue="Logout" onPress={ () => handleLogout() }>
        <Icon as={GlobeIcon} size="sm" mr="$2" />
        <MenuItemLabel size="sm">Logout</MenuItemLabel>
      </MenuItem>
    </Menu>
  )
}