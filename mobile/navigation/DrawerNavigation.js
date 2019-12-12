// import React from "react";
// import { Platform } from "react-native";
// import {
//   createStackNavigator,
//   createBottomTabNavigator,
//   createDrawerNavigator,
//   createSwitchNavigator
// } from "react-navigation";
// import { Ionicons } from "@expo/vector-icons";

// import TabBarIcon from "../components/TabBarIcon";
// import HomeScreen from "../screens/HomeScreen";
// import LinksScreen from "../screens/LinksScreen";
// import SettingsScreen from "../screens/SettingsScreen";
// import ItemsScreen from "../screens/Items";
// import Screen from "../screens/Screen2";
// import offerHelp from "../screens/offferHelp";
// import Drawer from '../screens/drawer';

// const config = Platform.select({
//   web: { headerMode: "screen" },
//   default: {}
// });

// const DrawerStack = createStackNavigator(
//   {
//     check: Drawer
//   },
//   config
// );

// DrawerStack.navigationOptions = {
//   tabBarLabel: "Drawer",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === "ios"
//           ? `ios-information-circle${focused ? "" : "-outline"}`
//           : "md-home"
//       }
//     />
//   )
// };

// DrawerStack.path = "";

// const ListStack = createStackNavigator(
//   {
//     Links: Drawer
//   },
//   config
// );

// ListStack.navigationOptions = {
//   tabBarLabel: "List",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === "ios" ? "ios-list" : "md-list"}
//     />
//   )
// };

// ListStack.path = "";


// const MainDrawer = createDrawerNavigator({
//   ItemsTabs: DrawerStack,
//   Settings: ListStack
// });
// MainDrawer.path = "";

// // const App = createSwitchNavigator({
// //   tabNavigator,
// //   MainDrawer
// // });

// // tabNavigator.path = "";

// // export default tabNavigator;
// export default MainDrawer;
