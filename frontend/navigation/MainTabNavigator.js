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
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ItemsScreen from '../screens/Items';
import Screen from '../screens/Screen2'
// import offerHelp from '../screens/offferHelp'
import offerHelp from "../screens/OfferHelp/OfferHelp";

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
    Links: LinksScreen
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
    Settings: offerHelp,
    Item: ItemsScreen,
    NewScreen: Screen,
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
    Settings: SettingsScreen
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
      activeTintColor: "#2f95dc",
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

