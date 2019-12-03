import React, { Component } from 'react';
import {
  View, TextInput, Button, Alert, Picker, CheckBox
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import styles from "./styles";

class RequestRescueScreen extends Component {
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
    //Checking for the permission just after component loaded
   
   /* if(Platform.OS === 'ios'){
      this.callLocation(this);
    }else{
      async function requestLocationPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
              'title': 'Location Access Required',
              'message': 'This App needs to Access your location'
            }
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            this.callLocation(val);
          } else {
            alert("Permission Denied");
          }
        } catch (err) {
          alert("err",err);
          console.warn(err)
        }
      }
      requestLocationPermission();
    }  
    */
  };
  callLocation(val){
    /*//alert("callLocation Called");
      Geolocation.getCurrentPosition(
        //Will give you the current location
         (position) => {
            const currentLongitude = JSON.stringify(position.coords.longitude);
            //getting the Longitude from the location json
            const currentLatitude = JSON.stringify(position.coords.latitude);
            //getting the Latitude from the location json
            this.setState({ currentLongitude:currentLongitude });
            //Setting state Longitude to re re-render the Longitude Text
            this.setState({ currentLatitude:currentLatitude });
            //Setting state Latitude to re re-render the Longitude Text
         },
         (error) => alert(error.message),
         { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
      this.watchID = Geolocation.watchPosition((position) => {
        //Will give you the location on location change
          console.log(position);
          const currentLongitude = JSON.stringify(position.coords.longitude);
          //getting the Longitude from the location json
          const currentLatitude = JSON.stringify(position.coords.latitude);
          //getting the Latitude from the location json
         this.setState({ currentLongitude:currentLongitude });
         //Setting state Longitude to re re-render the Longitude Text
         this.setState({ currentLatitude:currentLatitude });
         //Setting state Latitude to re re-render the Longitude Text
      });
      */
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
      name: this.state.name.value,
      phone: this.state.phone.value,
      typeOfHelp: this.state.typeOfHelp.value,
      issueDescription: this.state.issueDescription.value,
      commTerms: this.state.commTerms.value,
      latitude: this.state.geolocation.latitude.value,
      longitude: this.state.geolocation.longitude.value,
      geolocation: this.state.geolocation
    };
    //call the api
    //Alert.alert('your Request has been noticed, Help is on it\'s way');
  };

  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.inputContainer}>
        <View>
            <Picker
              selectedValue={this.state.typeOfHelp}
              style={{ height: 50, width: 500 }}
              onValueChange={(value) => this.updateInputState('typeOfHelp', value)
              }>
              <Picker.Item label="Please select the type of help you Need ▼" value="0" />
              <Picker.Item label="Rescue" value="Rescue" />
              <Picker.Item label="Food & Water Supply" value="Supply" />
              <Picker.Item label="Medical Assitance" value="MedicalAssitance" />
            </Picker>
          </View>
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
export default (RequestRescueScreen);