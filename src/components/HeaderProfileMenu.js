import React from "react";
import { Menu, MenuItem, Icon, Pressable } from '@gluestack-ui/themed';
import { useNavigation } from "@react-navigation/native";
import { Ionicons} from "@expo/vector-icons";
import { MenuLabel } from "@gluestack-ui/config/build/theme";

export default function HeaderProfileMenu() {
  const navigation = useNavigation();
  return (
    <Menu
      trigger={(triggerProps) => {
        return (
          <Pressable accessibilityLabel="User Profile Options" {...triggerProps}>
        <Icon as={Ionicons} name="person" color='#FFF' size="lg" />
      </Pressable>
        )
      }}
    >
      <MenuItem onPress={() => navigation.navigate('Profile')}>
        <MenuLabel>My Profile</MenuLabel>
      </MenuItem>
      <MenuItem>Logout</MenuItem>
    </Menu>
  )
}