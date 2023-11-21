import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon, MenuIcon, Menu, MenuItem, MenuItemLabel, Pressable } from '@gluestack-ui/themed'
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../contexts/auth/AuthContext";

function UserMenu() {
  return(
    <Menu
      trigger={(triggerProps) => {
        return(
          <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <Icon as={MenuIcon} color="#FFF" size="lg" />
          </Pressable>
        )
      }}
    >
      <MenuItem 
      key="UserHome"
      textValue="UserHome"
      onPress={() => handlePress("UserHome")}
      >
        <MenuItemLabel size="sm">Home</MenuItemLabel>
      </MenuItem>

      <MenuItem 
      key="AuctionRoomUser"
      textValue="AuctionRoomUser"
      onPress={() => handlePress("AuctionRoomUser")}
      >
        <MenuItemLabel size="sm">My Auctions</MenuItemLabel>
      </MenuItem>

      <MenuItem 
      key="SubmitItem"
      textValue="SubmitItem"
      onPress={() => handlePress("SubmitItem")}
      >
        <MenuItemLabel size="sm">Submit an Item</MenuItemLabel>
      </MenuItem>
    </Menu>
  )
}

function AdminMenu() {
  return (
    <Menu
      trigger={(triggerProps) => {
        return(
          <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <Icon as={MenuIcon} color="#FFF" size="md" />
          </Pressable>
        )
      }}
    >
      <MenuItem 
      key="AdminHome"
      textValue="AdminHome"
      onPress={() => handlePress("AdminHome")}
      >
        <MenuItemLabel size="sm">Home</MenuItemLabel>
      </MenuItem>

      <MenuItem 
      key="Reviews"
      textValue="Reviews"
      onPress={() => handlePress("Reviews")}
      >
        <MenuItemLabel size="sm">My Auctions</MenuItemLabel>
      </MenuItem>
    </Menu>
  )
}

export default function HeaderMenu() {
  const navigation = useNavigation();
  const { user, isLoggedIn } = useContext(AuthContext); // Replace with your actual context

  const handlePress = (screenName) => {
    navigation.navigate(screenName);
  };

  const renderMenu = (user) => {
    if (isLoggedIn && user && user.role === "user") {
      return <UserMenu handlePress={handlePress} />;
    } else if (isLoggedIn && user && user.role === "admin") {
      return <AdminMenu handlePress={handlePress} />;
    } else {
      // Handle other cases if needed
      return null;
    }
  };

  return renderMenu(user);
}

// export default function HeaderMenu() {
//   const navigation = useNavigation();
//   // const { user } = useContext(AuthContext);

//   const user = {
//     role: user,
//   };

//   const handlePress = (screenName) => {
//     navigation.navigate(screenName);
//   };

//   const renderMenu = () => {

//     if (user.role === "user") {
//       console.log(user.role);
//       return <UserMenu handlePress={handlePress} />;
//     } else if (user.role === "admin") {
//       return <AdminMenu handlePress={handlePress} />;

//     // Line 96 will let Menu button appear regardless of user/admin
//     // } else {
//     //   return <UserMenu handlePress={handlePress} />; 
//     }
//   };

//   return renderMenu(user);
// }
