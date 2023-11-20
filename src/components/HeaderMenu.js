import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon, MenuIcon, Menu, MenuItem, MenuItemLabel, Pressable } from '@gluestack-ui/themed'

export default function HeaderMenu() {
  
  const navigation = useNavigation();
  
  return (
    <Menu
      trigger={(triggerProps) => {
        return (
          <Pressable accessibilityLabel='More options menu' {...triggerProps}>
            <Icon as={MenuIcon} m="$2" w="$4" h="$4"/>
          </Pressable>
        )
      }}
    >
      <MenuItem key='UserHome' textvalue='UserHome' onPress={() => navigation.navigate('UserHome')}>
        <MenuItemLabel size='sm'>Home</MenuItemLabel>
      </MenuItem>


      <MenuItem key='AuctionRoomUser' textvalue='AuctionRoomUser' onPress={() => navigation.navigate('AuctionRoomUser')}>
        <MenuItemLabel size='sm'>My Auctions</MenuItemLabel>
      </MenuItem>

      <MenuItem key='SubmitItem' textvalue='SubmitItem' onPress={() => navigation.navigate('SubmitItem')}>
        <MenuItemLabel size='sm'>Submit Item</MenuItemLabel>
      </MenuItem>
    </Menu>
  )
}