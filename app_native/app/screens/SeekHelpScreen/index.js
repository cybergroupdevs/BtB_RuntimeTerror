import React, { Component } from 'react';
import {  View, TextInput, Button,ScrollView } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import PhoneInput from 'react-native-phone-input';
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

  componentDidMount = async () => {

  };

  onSeekHelpHandler = () => {
    const rescueRequestData = {

    };
  };

  render() {
    return (
      <ScrollView >
        <View style={styles.Container}>
          <View style={styles.inputContainer}>
            <View>
              <TextInput
                underlineColorAndroid="#428AF8"
                selectionColor="#428AF8"
                placeholder="Your Name"
                value={this.state.name.value}
                onChangeText={(value) => this.updateInputState('name', value)}
                returnKeyType={"next"}
              />
            </View>
            <View>
              <TextInput
                underlineColorAndroid="#428AF8"
                selectionColor="#428AF8"
                placeholder="Phone"
                value={this.state.phone.value}
                onChangeText={(value) => this.updateInputState('phone', value)}
                returnKeyType={"next"}
              />
            </View>
            <View>
              <TextInput
                    underlineColorAndroid="#428AF8"
                    selectionColor="#428AF8"
                selectionColor="#428AF8"
                placeholder="Describe your issue"
                value={this.state.issueDescription.value}
                onChangeText={(value) => this.updateInputState('issueDescription', value)}
                returnKeyType={"next"}
              />
            </View>
          </View>
          <Button
            title="Request Help"
            color="#f194ff"
          //onPress={this.onRequestRescueHandler()          }
          />
        </View>
      </ScrollView>
    );
  }
};
export default (SeekHelpScreen);