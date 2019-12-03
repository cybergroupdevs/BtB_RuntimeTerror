import React, { Component } from 'react';
import { View, TextInput, Button, Picker, Text, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker'
import styles from "./styles";

class SignupScreen extends Component {
  state = {
    usertype: "User",
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
    gender: "male",

    fullauthname: "",
    fullauthadd: "",
    phone2: "",
    phone3: ""
  };

  componentDidMount = async () => {
    //Checking for the permission just after component loaded
  };

  onSignupHandler = () => {
    if (this.state.usertype == 'User') {
      const signupdata = {
        usertype: this.state.usertype,
        firstname: this.state.firstname,
        middlename: this.state.middlename,
        lastname: this.state.lastname,
        dob: this.state.dob,
        email: this.state.email,
        password: this.state.password,
        retypepass: this.state.retypepass,
        phone: this.state.phone,
      }
      //call the api
    } else {
      const signupdata = {
        usertype: this.state.usertype,
        authname: this.state.fullauthname,
        authadd: this.state.fullauthadd,
        email: this.state.email,
        phone: this.state.phone,
        password: this.state.password,
        retypepass: this.state.retypepass,
        phone2: this.state.phone2,
        phone3: this.state.phone3
      }
      //call the api
    }
    //Alert.alert('your Request has been noticed, Help is on it\'s way');
  };

  render() {
    return (
      <ScrollView >
        <View style={styles.Container}>
          <View style={styles.inputContainer}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={{ padding: 15, fontSize: 15 }}>Signup As :</Text>
              <Picker
                selectedValue={this.state.usertype}
                style={{ height: 50, width: 215 }}
                onValueChange={(value) => this.setState({ usertype: value })
                }>
                <Picker.Item label="User" value="User" />
                <Picker.Item label="Authority" value="Authority" />
              </Picker>
            </View>
            <View>
              {this.state.usertype == 'User' ?
                <View>
                  <TextInput
                    underlineColorAndroid="#428AF8"
                    selectionColor="#428AF8"
                    placeholder="First Name"
                    value={this.state.firstname.value}
                    onChangeText={(value) => this.setState({ firstname: value })}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#428AF8"
                    selectionColor="#428AF8"
                    placeholder="Middle Name"
                    value={this.state.middlename.value}
                    onChangeText={(value) => this.setState(middlename, value)}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#428AF8"
                    selectionColor="#428AF8"
                    placeholder="Last Name"
                    value={this.state.lastname.value}
                    onChangeText={(value) => this.setState(lastname, value)}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#428AF8"
                    selectionColor="#428AF8"
                    placeholder="Phone Number"
                    value={this.state.phone.value}
                    keyboardType={'phone-pad'}
                    onChangeText={(value) => this.setState(phone, value)}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#428AF8"
                    placeholder="Enter your Email"
                    value={this.state.email.value}
                    onChangeText={(value) => this.setState(email, value)}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#428AF8"
                    selectionColor="#428AF8"
                    placeholder="Enter your Password"
                    value={this.state.password.value}
                    onChangeText={(value) => this.setState(password, value)}
                    returnKeyType={"next"}
                    secureTextEntry={true}
                  />
                  <TextInput
                    underlineColorAndroid="#428AF8"
                    selectionColor="#428AF8"
                    placeholder="Re-enter your Password"
                    value={this.state.retypepass.value}
                    onChangeText={(value) => this.setState(retypepass, value)}
                    returnKeyType={"next"}
                    secureTextEntry={true}
                  />
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <DatePicker
                      style={{ width: 175, paddingBottom: 10, paddingTop: 5 }}
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
                    <Picker
                      selectedValue={this.state.gender}
                      style={{ width: 150 }}
                      onValueChange={(value) => this.setState({ gender: value })
                      }>
                      <Picker.Item label="Male" value="male" />
                      <Picker.Item label="Female" value="female" />
                      <Picker.Item label="Other" value="other" />
                    </Picker>
                  </View>
                </View> 
                :
                <View>
                  <TextInput
                    underlineColorAndroid="#428AF8"
                    selectionColor="#428AF8"
                    placeholder="Authority's Full Name"
                    value={this.state.fullauthname.value}
                    onChangeText={(value) => this.setState(fullauthname, value)}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#428AF8"
                    selectionColor="#428AF8"
                    placeholder="Full Address"
                    value={this.state.fullauthadd.value}
                    onChangeText={(value) => this.setState(fullauthadd, value)}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#428AF8"
                    selectionColor="#428AF8"
                    placeholder="Authority's Official Email"
                    value={this.state.email.value}
                    onChangeText={(value) => this.setState(email, value)}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#428AF8"
                    selectionColor="#428AF8"
                    placeholder="Enter your Password"
                    value={this.state.password.value}
                    onChangeText={(value) => this.setState(password, value)}
                    returnKeyType={"next"}
                    secureTextEntry={true}
                  />
                  <TextInput
                    underlineColorAndroid="#428AF8"
                    selectionColor="#428AF8"
                    placeholder="Re-enter your Password"
                    value={this.state.retypepass.value}
                    onChangeText={(value) => this.setState(retypepass, value)}
                    returnKeyType={"next"}
                    secureTextEntry={true}
                  />
                  <TextInput
                    underlineColorAndroid="#428AF8"
                    selectionColor="#428AF8"
                    placeholder="Phone Number"
                    value={this.state.phone.value}
                    keyboardType={'phone-pad'}
                    onChangeText={(value) => this.setState(phone, value)}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#428AF8"
                    selectionColor="#428AF8"
                    placeholder="Add Another Phone"
                    value={this.state.phone2.value}
                    keyboardType={'phone-pad'}
                    onChangeText={(value) => this.setState(phone2, value)}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#428AF8"
                    selectionColor="#428AF8"
                    placeholder="Add Another Phone"
                    value={this.state.phone3.value}
                    keyboardType={'phone-pad'}
                    onChangeText={(value) => this.setState(phone3, value)}
                    returnKeyType={"next"}
                  />
                </View>
              }
            </View>
            <Button
              title="Sign Up"
              color="#f194ff"
            //onPress={this.onRequestRescueHandler()          }
            />
          </View>
        </View>
      </ScrollView>
    );
  }
};
export default (SignupScreen);