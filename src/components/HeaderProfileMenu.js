import React from "react";
import { Icon, Menu, Pressable } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Ionicons} from "@expo/vector-icons";

export default function HeaderProfileMenu() {
  const navigation = useNavigation();
  return (
    <Menu
      trigger={(triggerProps) => {
        return (
          <Pressable accessibilityLabel="User Profile Options" {...triggerProps}>
        <Icon as={Ionicons} name="person" color='#FFF' size="lg" marginRight={10}/>
      </Pressable>
        )
      }}
    >
      <Menu.Item onPress={() => navigation.navigate('Profile')}>My Profile</Menu.Item>
      <Menu.Item>Logout</Menu.Item>
    </Menu>
  )
}