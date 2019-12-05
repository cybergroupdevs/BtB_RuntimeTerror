import React, { Component } from 'react';
import { View, TextInput, Button, ScrollView, Image } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Textarea from 'react-native-textarea';
import AashrayLogo from "../../assets/icons/AashrayLogo.png";
import styles from "./styles";

class SeekHelpScreen extends Component {
  static get options() {
    return {
      topBar: { visible: false, height: 0 }
    };
  }
  state = {
    name: "",
    phone: "",
    typeOfHelp: "",
    issueDescription: "",
    commTerms: false,
    currentLongitude: "",
    currentLatitude: "",
    pickerdata: "",
    geolocation: {
      latitude: "",
      longitude: ""
    }
  };

  onSeekHelpHandler = () => {
    const rescueRequestData = {

    };
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
              onChangeText={(value) => this.setState({name: value})}
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