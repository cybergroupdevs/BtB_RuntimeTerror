import React, { Component } from 'react';
import { View, TextInput, Button, ScrollView, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import Textarea from 'react-native-textarea';
import AashrayLogo from "../../assets/images/AashrayLogo.png";
import styles from "./styles";

class SeekHelpScreen extends Component {
  static navigationOptions = {
    title: "Seek Help"
  };
  state = {
    name: "",
    phone: "",
    issueDescription: "",
    currentLongitude: "",
    currentLatitude: "",
    latitude: "",
    longitude: ""
  };

   getLocationAsync = () => {
    const { status, permissions } =  Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      return Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    } else {
      throw new Error('Location permission not granted');
    }
  }

  onSeekHelpHandler = () => {
    const rescueRequestData = this.getLocationAsync;
    console.log(rescueRequestData)
    alert("done")
  };

  render() {
    return (
      <ScrollView >
        <View style={styles.Container}>
          <View style={styles.LogoContainer}>
            <Image
              source={AashrayLogo}
              style={styles.LogoImage}
            />
          </View>
          <View style={styles.InputContainer}>
            <TextInput
              underlineColorAndroid="#6F2059"
              selectionColor="#6F2059"
              placeholder="Your Name"
              value={this.state.name.value}
              onChangeText={(value) => this.setState({ name: value })}
              returnKeyType={"next"}
            />
            <TextInput
              underlineColorAndroid="#6F2059"
              selectionColor="#6F2059"
              placeholder="Phone"
              value={this.state.phone.value}
              onChangeText={(value) => this.setState(phone, value)}
              returnKeyType={"next"}
            />
            <Textarea
              style={styles.textareaContainer}
              underlineColorAndroid="#6F2059"
              selectionColor="#6F2059"
              maxLength={200}
              placeholder="Describe your issue"
              value={this.state.issueDescription.value}
              onChangeText={(value) => this.setState({ issueDescription: value })}
              returnKeyType={"next"}
            />
          </View>
          <View style={styles.ButtonContainer}>
            <Button
              title="Request Help"
              color="#A52E84"
              onPress={() => this.onSeekHelpHandler()}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
};
export default (SeekHelpScreen);