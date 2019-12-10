import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createSwitchNavigator
} from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import OfferHelp from "../screens/OfferHelp/OfferHelp";
import LoginScreen from "../screens/login/index";
import SignupScreen from "../screens/sign-up/index";
import ListScreen from "../screens/ListScreen/list";
import ProfileScreen from "../screens/ProfileScreen/index";
import ListDetail from "../components/ListDetails/index";
import OfferedHelpsList from '../screens/OfferedHelpsList/index';
import SeekHelp from '../screens/SeekHelpScreen/index';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-home"
      }
    />
  )
};

HomeStack.path = '';

const ListStack = createStackNavigator(
  {
    List: ListScreen,
    ListDetail: ListDetail,
    SeekHelp: SeekHelp
  },
  config
);

ListStack.navigationOptions = {
  tabBarLabel: 'List',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'} />
  ),
};

ListStack.path = "";

const HelpStack = createStackNavigator(
  {
    OfferedHelpsList: OfferedHelpsList,
    OfferHelp: OfferHelp 
  },
  config
);

HelpStack.navigationOptions = {
  tabBarLabel: "Offer Help",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-help-buoy" : "md-help-buoy"}
    />
  )
};

HelpStack.path = "";

const ProfileStack = createStackNavigator(
  {
    // Login : LoginScreen,
    // Signup : SignupScreen,
    Profile : ProfileScreen
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-contact" : "md-contact"}
    />
  )
};

ProfileStack.path = "";

// const LoginStack = createStackNavigator(
//   {
//     // Login : LoginScreen,
//     // Signup : SignupScreen,
//     Profile : ProfileScreen
//   },
//   config
// );

// // ProfileStack.navigationOptions = {
// //   tabBarIcon: ({ focused }) => (
// //     <TabBarIcon
// //       focused={focused}
// //       name={Platform.OS === "ios" ? "ios-contact" : "md-contact"}
// //     />
// //   )
// // };

// LoginStack.path = "";




const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    ListStack,
    HelpStack,
    ProfileStack
  },
  {
    tabBarOptions: {
      scrollEnabled: true,
      upperCaseLabel: false,
      activeTintColor: "#FEEBFA",
      inactiveTintColor: "#ccc",
      showLabel: false,
      style: {
        height: 55,
        borderTopWidth: 1,
        borderTopColor: "#ccc",
        marginBottom: 2,
        marginLeft: 5,
        marginRight: 5
      }
    }
  }
);

tabNavigator.path = '';

export default tabNavigator;

