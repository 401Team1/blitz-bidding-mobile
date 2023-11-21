import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon, MenuIcon, Menu, MenuItem, MenuItemLabel, Pressable } from '@gluestack-ui/themed'
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import { AuthContext } from "../contexts/auth/AuthContext";

function UserMenu(props) {

  const { handlePress, userRole } = props;

  return(
    <Menu
      trigger={(triggerProps) => {
        return(
          <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <Icon as={MenuIcon} color="#FFF" size="xl" />
          </Pressable>
        )
      }}
    >
      // User
      { userRole === 'user' ? 
        <MenuItem 
        key="UserHome"
        textValue="UserHome"
        onPress={() => handlePress("UserHome")}
        >
          <MenuItemLabel size="sm">Home</MenuItemLabel>
        </MenuItem>
        : null
      }

      // Putting console.log placeholders for now. will replace if we can build the actual screens.
      { userRole === 'user' ? 
      <MenuItem 
      key="MyAuctions"
      textValue="MyAuctions"
      onPress={() => console.log("MyAuctions")}
      >
        <MenuItemLabel size="sm">My Auctions</MenuItemLabel>
      </MenuItem>
      : null
    }

    { userRole === 'user' ?
      <MenuItem 
      key="SubmitItem"
      textValue="SubmitItem"
      onPress={() => console.log("SubmitItem")}
      >
        <MenuItemLabel size="sm">Submit an Item</MenuItemLabel>
      </MenuItem>
      : null
    }
    // Admin
    { userRole === 'admin' ?
      <MenuItem 
      key="AdminHome"
      textValue="AdminHome"
      onPress={() => handlePress("AdminHome")}
      >
      <MenuItemLabel size="sm">Home</MenuItemLabel>
      </MenuItem>
      : null
    }
    { userRole === 'admin' ?
      <MenuItem 
      key="Reviews"
      textValue="Reviews"
      onPress={() => handlePress("Reviews")}
      >
        <MenuItemLabel size="sm">Review Auctions</MenuItemLabel>
      </MenuItem>
      : null
    }
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
    if (isLoggedIn && user) {
      return <UserMenu handlePress={handlePress} userRole={user.role} />;
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
