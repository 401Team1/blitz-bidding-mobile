import React from "react";
import { useNavigation } from "@react-navigation/native";
import { HamburgerIcon, Menu, Pressable } from "native-base";

export default function HeaderMenu() {
  const navigation = useNavigation();
  return (
    <Menu
      trigger={(triggerProps) => {
        return (
          <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <HamburgerIcon color='#FFF' />
          </Pressable>
        )
      }}
    >
      <Menu.Item onPress={() => navigation.navigate('UserHome')}>Home</Menu.Item>
      <Menu.Item onPress={() => navigation.navigate('AuctionRoomUser')}>My Auctions</Menu.Item>
      <Menu.Item onPress={() => navigation.navigate('SubmitItem')}>Submit Item</Menu.Item>
    </Menu>
  )
}