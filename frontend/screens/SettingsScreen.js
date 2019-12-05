import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return(
    <View><Text>This is SettingsScreen</Text></View>
  )
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
