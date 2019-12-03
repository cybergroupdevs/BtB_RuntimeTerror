import React, { Component } from 'react';
import {
  View, TextInput, Button, Alert, Picker, CheckBox
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import styles from "./styles";

class OfferHelpScreen extends Component {
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
    geolocation: {
      latitude: "",
      longitude: ""
    }
  };

  componentDidMount = async () => {

  };

  callLocation(val){
   
   }
  updateInputState = (key, value) => {
    /*this.setState(prevState => {
      return {
        ...prevState[key],
        value: value
      };
    });
    */
  };

  onRequestRescueHandler = () => {
    const rescueRequestData = {

    };
    //call the api
    //Alert.alert('your Request has been noticed, Help is on it\'s way');
  };

  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.inputContainer}>
          <View>
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Full Name"
              value={this.state.name.value}
              onChangeText={(value) => this.updateInputState('name', value)}
              returnKeyType={"next"}
            />
          </View>
          <View>
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Phone"
              value={this.state.phone.value}
              onChangeText={(value) => this.updateInputState('phone', value)}
              returnKeyType={"next"}
            />
          </View>
          <View>
            <TextInput
              underlineColorAndroid="transparent"
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
    );
  }
};
export default (OfferHelpScreen);