import React, { Component } from 'react';
import { View, TextInput, Button, ScrollView, Image, Platform } from 'react-native';
import Permissions from 'expo-permissions';
import Location from 'expo-location'
import Constants from 'expo-constants';
import Geolocation from 'react-native-geolocation-service';
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

  componentDidMount() {
    // Instead of navigator.geolocation, just use Geolocation.
    //if (hasLocationPermission) {
        Geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    //}
}
  componentWillMount() {
   // this._getLocation()
  };

  _getLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      console.log('Permission to access location was denied')
    }
    const Currentlocation = await Location.getCurrentPositionAsync();
    this.setState({location:Currentlocation})
  };
  

  onSeekHelpHandler = () => {
    let location = this._getLocation()
    console.log(this.state.location)
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