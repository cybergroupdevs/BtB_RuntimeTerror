import React from 'react';
import { createAppContainer, createSwitchNavigator,createStackNavigator } from 'react-navigation';
import LoginScreen from "../screens/login/index";
import SignupScreen from "../screens/sign-up/index";

import MainTabNavigator from './MainTabNavigator';
// import DrawerNavigation from './DrawerNavigation'



const LoginStack = createStackNavigator(
  {
    Login : LoginScreen,
    Signup : SignupScreen,
    // Profile : ProfileScreen
  }
);

// ProfileStack.navigationOptions = {
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === "ios" ? "ios-contact" : "md-contact"}
//     />
//   )
// };

LoginStack.path = "";

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Login: LoginStack
    // Loading: DrawerNavigation
  }),
  
);
