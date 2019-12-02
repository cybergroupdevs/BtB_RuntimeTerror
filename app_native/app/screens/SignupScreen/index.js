import React, { Component } from 'react';
import {
  View, TextInput, Button, Alert, Picker, CheckBox,ScrollView
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import styles from "./styles";

class SignupScreen extends Component {
  static get options() {
    return {
      topBar: { visible: false, height: 0 }
    };
  }
  state = {
    usertype: "user",
    email: "",
    password: "",
    retypepass: "",
    phone: "",
    terms: "",

    firstname: "",
    middlename: "",
    lastname: "",
    dob: "",
    partoforg: false,
    orgname: "",

    fullauthname: "",
    fullauthadd: "",
    phone2: "",
    phone3: ""
  };

  componentDidMount = async () => {
    //Checking for the permission just after component loaded
  };

  updateInputState = (key, value) => {
    /*this.setState(prevState => {
      return {
        ...prevState[key],
        value: value
      };
    });
    */
  };

  onSignupHandler = () => {
    if (Usertype == 'user') {
      const signupdata = {
        usertype: this.state.usertype,
        firstname: this.state.firstname,
        middlename: this.state.middlename,
        lastname: this.state.lastname,
        dob: this.state.dob,
        email: this.state.email,
        password: this.state.password,
        phone: this.state.phone,
        retypepass: this.state.retypepass,
        partoforg: false,
        orgname: ""
      }
    } else {
      const signupdata = {
        usertype: this.state.usertype
      }
    }
    //call the api
    //Alert.alert('your Request has been noticed, Help is on it\'s way');
  };

  render() {
    return (
      <ScrollView >
        <View style={styles.Container}>
        <View style={styles.inputContainer}>
          <View>
            <Picker
              selectedValue={this.state.typeOfHelp}
              style={{ height: 50, width: 500 }}
              onValueChange={(value) => this.updateInputState('usertype', value)
              }>
              <Picker.Item label="Please select your role ▼" value="0" />
              <Picker.Item label="User" value="user" />
              <Picker.Item label="NGO" value="NGO" />
              <Picker.Item label="Authority" value="Authority" />
            </Picker>
          </View>
          <View>
            {this.state.usertype=='user' ? 
            <View>
            <View hide={false}>
              <TextInput
                underlineColorAndroid="#428AF8"
                selectionColor="#428AF8"
                placeholder="First Name"
                value={this.state.firstname.value}
                onChangeText={(value) => this.updateInputState('firstname', value)}
                returnKeyType={"next"}
              />
            </View>
            <View>
              <TextInput
                underlineColorAndroid="#428AF8"
                selectionColor="#428AF8"
                placeholder="Middle Name"
                value={this.state.middlename.value}
                onChangeText={(value) => this.updateInputState('middlename', value)}
                returnKeyType={"next"}
              />
            </View>
            <View>
              <TextInput
                underlineColorAndroid="#428AF8"
                selectionColor="#428AF8"
                placeholder="Last Name"
                value={this.state.lastname.value}
                onChangeText={(value) => this.updateInputState('lastname', value)}
                returnKeyType={"next"}
              />
            </View>
            <View>
              <TextInput
                underlineColorAndroid="#428AF8"
                selectionColor="#428AF8"
                placeholder="Phone Number"
                value={this.state.phone.value}
                keyboardType={'phone-pad'}
                onChangeText={(value) => this.updateInputState('phone', value)}
                returnKeyType={"next"}
              />
            </View>
            <View>
              <DatePicker
                style={{ width: 200, paddingBottom: 20 }}
                date={this.state.dob}
                mode="date"
                placeholder="select date of birth"
                format="YYYY-MM-DD"
                minDate="1970-01-01"
                maxDate="2030-12-31"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                }}
                onDateChange={(date) => { this.setState({ dob: date }) }}
              />
            </View>
            <View>
              <TextInput
                underlineColorAndroid="#428AF8"
                placeholder="Enter your Email"
                value={this.state.email.value}
                onChangeText={(value) => this.updateInputState('email', value)}
                returnKeyType={"next"}
              />
            </View>
            <View>
              <TextInput
                underlineColorAndroid="#428AF8"
                selectionColor="#428AF8"
                placeholder="Enter your Password"
                value={this.state.password.value}
                onChangeText={(value) => this.updateInputState('password', value)}
                returnKeyType={"next"}
                secureTextEntry={true}
              />
            </View>
            <View>
              <TextInput
                underlineColorAndroid="#428AF8"
                selectionColor="#428AF8"
                placeholder="Re-enter your Password"
                value={this.state.retypepass.value}
                onChangeText={(value) => this.updateInputState('retypepass', value)}
                returnKeyType={"next"}
                secureTextEntry={true}
              />
            </View>
            </View>
            :null }
          </View>
          
          <View >
            <View>
              <TextInput
                underlineColorAndroid="#428AF8"
                selectionColor="#428AF8"
                placeholder="Authority's Full Name"
                value={this.state.fullauthname.value}
                onChangeText={(value) => this.updateInputState('fullauthname', value)}
                returnKeyType={"next"}
              />
            </View>
            <View>
              <TextInput
                underlineColorAndroid="#428AF8"
                selectionColor="#428AF8"
                placeholder="Full Address"
                value={this.state.fullauthadd.value}
                onChangeText={(value) => this.updateInputState('fullauthadd', value)}
                returnKeyType={"next"}
              />
            </View>
            <View>
              <TextInput
                underlineColorAndroid="#428AF8"
                selectionColor="#428AF8"
                placeholder="Authority's Official Email"
                value={this.state.email.value}
                onChangeText={(value) => this.updateInputState('email', value)}
                returnKeyType={"next"}
              />
            </View>
            <View>
              <TextInput
                underlineColorAndroid="#428AF8"
                selectionColor="#428AF8"
                placeholder="Enter your Password"
                value={this.state.password.value}
                onChangeText={(value) => this.updateInputState('password', value)}
                returnKeyType={"next"}
                secureTextEntry={true}
              />
            </View>
            <View>
              <TextInput
                underlineColorAndroid="#428AF8"
                selectionColor="#428AF8"
                placeholder="Re-enter your Password"
                value={this.state.retypepass.value}
                onChangeText={(value) => this.updateInputState('retypepass', value)}
                returnKeyType={"next"}
                secureTextEntry={true}
              />
            </View>
            <View>
              <TextInput
                underlineColorAndroid="#428AF8"
                selectionColor="#428AF8"
                placeholder="Phone Number"
                value={this.state.phone.value}
                keyboardType={'phone-pad'}
                onChangeText={(value) => this.updateInputState('phone', value)}
                returnKeyType={"next"}
              />
            </View>
            <View>
              <TextInput
                underlineColorAndroid="#428AF8"
                selectionColor="#428AF8"
                placeholder="Add Another Phone"
                value={this.state.phone2.value}
                keyboardType={'phone-pad'}
                onChangeText={(value) => this.updateInputState('phone2', value)}
                returnKeyType={"next"}
              />
            </View>
            <View>
              <TextInput
                underlineColorAndroid="#428AF8"
                selectionColor="#428AF8"
                placeholder="Add Another Phone"
                value={this.state.phone3.value}
                keyboardType={'phone-pad'}
                onChangeText={(value) => this.updateInputState('phone3', value)}
                returnKeyType={"next"}
              />
            </View>
          </View>
        </View>
        <Button
          title="Sign Up"
          color="#f194ff"
        //onPress={this.onRequestRescueHandler()          }
        />

</View>
      </ScrollView>
    );
  }
};
export default (SignupScreen);