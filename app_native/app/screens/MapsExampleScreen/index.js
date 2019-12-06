import React, { Component } from 'react';
import { View, TextInput, Button, Image, Text } from 'react-native';
import styles from "./styles";
import MapView from 'react-native-maps';
import AashrayLogo from "../../assets/icons/AashrayLogo.png";

class MapsExampleScreen extends Component {
  state = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  render() {
    return (
      <MapView style={styles.Container}>
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
      </MapView>
    );
  }
}

export default (MapsExampleScreen);