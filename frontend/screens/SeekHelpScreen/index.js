import React, { Component } from 'react';
import { View, TextInput, Button, ScrollView, Image, Platform } from 'react-native';
import Permissions from 'expo-permissions';
import Location from 'expo-location'
import Constants from 'expo-constants';
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
    longitude: "",
    location: null
  };

  componentWillMount() {
   // this._getLocation()
  };

  //Getting the Location of the User
  _getLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      console.log('Permission to access location was denied')
    }
    const Currentlocation = await Location.getCurrentPositionAsync();
    this.setState({location:Currentlocation})
  };
  
  //Submit the rescue request with info and UserLocation
  onSeekHelpHandler = () => {
    let location = this._getLocation()
    //console.log(this.state.location)
  };

  //Returns the view to Raise a Rescue Request
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
              style={{ fontSize: 18, paddingBottom: 8, paddingTop: 13 }}
            />
            <TextInput
              underlineColorAndroid="#6F2059"
              selectionColor="#6F2059"
              placeholder="Phone"
              value={this.state.phone.value}
              onChangeText={(value) => this.setState(phone, value)}
              returnKeyType={"next"}
              style={{ fontSize: 18, paddingBottom: 8, paddingTop: 13 }}
            />
            <Textarea
              style={[styles.textareaContainer,{ fontSize: 18, paddingBottom: 8, paddingTop: 13 }]}
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