import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from "react-native";

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  
  const getLabelName = (name) => {
    switch (name) {
      case "md-home":
        return "Home";
        break;
      case "md-list":
        return "List";
        break;
      case "md-help-buoy":
        return "Offer Help";
        break;
      case "md-contact":
        return "Profile";
        break;
      default:
        break;
    }
  }
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Ionicons
        name={props.name}
        size={props.focused ? 35 : 25}
        style={{ marginBottom: -3 }}
        color={props.focused ? "#6F2059" : Colors.tabIconDefault}
      />
      {props.focused ? (
        <Text style={{ color: "#6F2059" }}>{getLabelName(props.name)}</Text>
      ) : null}
    </View>
  );
}
