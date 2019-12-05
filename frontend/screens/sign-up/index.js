import React, { Component } from "react";
import {
  View,
  TextInput,
  Button,
  Picker,
  Text,
  Image,
  ScrollView
} from "react-native";
import DatePicker from "react-native-datepicker";
import AashrayLogo from "../../assets/images/AashrayLogo.png";
import styles from "./style";

class SignupScreen extends Component {
  static navigationOptions = {
    title: "Sign-up"
  };

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

  onSignupHandler = () => {
    if (this.state.usertype == "User") {
      const signupdata = {
        usertype: this.state.usertype,
        firstname: this.state.firstname,
        middlename: this.state.middlename,
        lastname: this.state.lastname,
        dob: this.state.dob,
        email: this.state.email,
        password: this.state.password,
        retypepass: this.state.retypepass,
        phone: this.state.phone
      };
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
      };
      //call the api
    }
    //Alert.alert('your Request has been noticed, Help is on it\'s way');
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.MainContainer}>
          <View>
            <View style={styles.LogoContainer}>
              <Image source={AashrayLogo} />
            </View>
            <View style={styles.UserSelectionContainer}>
              <Text style={styles.UserSelectionText}>Signup As :</Text>
              <Picker
                selectedValue={this.state.usertype}
                style={styles.UserSelectionPicker}
                onValueChange={value => this.setState({ usertype: value })}
              >
                <Picker.Item label="User" value="User" />
                <Picker.Item label="Authority" value="Authority" />
              </Picker>
            </View>
            <View style={styles.UserSpecificContainers}>
              {this.state.usertype == "User" ? (
                <View style={styles.UserInputWrapper}>
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    placeholder="First Name"
                    value={this.state.firstname.value}
                    onChangeText={value => this.setState({ firstname: value })}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    placeholder="Middle Name"
                    value={this.state.middlename.value}
                    onChangeText={value => this.setState(middlename, value)}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    placeholder="Last Name"
                    value={this.state.lastname.value}
                    onChangeText={value => this.setState(lastname, value)}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    placeholder="Phone Number"
                    value={this.state.phone.value}
                    keyboardType={"phone-pad"}
                    onChangeText={value => this.setState(phone, value)}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    placeholder="Enter your Email"
                    value={this.state.email.value}
                    onChangeText={value => this.setState(email, value)}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    placeholder="Enter your Password"
                    value={this.state.password.value}
                    onChangeText={value => this.setState(password, value)}
                    returnKeyType={"next"}
                    secureTextEntry={true}
                  />
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    placeholder="Re-enter your Password"
                    value={this.state.retypepass.value}
                    onChangeText={value => this.setState(retypepass, value)}
                    returnKeyType={"next"}
                    secureTextEntry={true}
                  />
                  <View style={styles.UserSelectionContainer}>
                    <View>
                      <DatePicker
                        style={styles.DatePickerStyle}
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
                            position: "absolute",
                            left: 0,
                            top: 4,
                            marginLeft: 0
                          },
                          dateInput: {
                            marginLeft: 36
                          }
                        }}
                        onDateChange={date => {
                          this.setState({ dob: date });
                        }}
                      />
                    </View>
                    <View>
                      <Picker
                        selectedValue={this.state.gender}
                        onValueChange={value =>
                          this.setState({ gender: value })
                        }
                      >
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                        <Picker.Item label="Other" value="other" />
                      </Picker>
                    </View>
                  </View>
                </View>
              ) : (
                <View style={styles.AuthorityInputWrapper}>
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    placeholder="Authority's Full Name"
                    value={this.state.fullauthname.value}
                    onChangeText={value => this.setState(fullauthname, value)}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    placeholder="Full Address"
                    value={this.state.fullauthadd.value}
                    onChangeText={value => this.setState(fullauthadd, value)}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    placeholder="Authority's Official Email"
                    value={this.state.email.value}
                    onChangeText={value => this.setState(email, value)}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    placeholder="Enter your Password"
                    value={this.state.password.value}
                    onChangeText={value => this.setState(password, value)}
                    returnKeyType={"next"}
                    secureTextEntry={true}
                  />
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    placeholder="Re-enter your Password"
                    value={this.state.retypepass.value}
                    onChangeText={value => this.setState(retypepass, value)}
                    returnKeyType={"next"}
                    secureTextEntry={true}
                  />
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    placeholder="Phone Number"
                    value={this.state.phone.value}
                    keyboardType={"phone-pad"}
                    onChangeText={value => this.setState(phone, value)}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    placeholder="Add Another Phone"
                    value={this.state.phone2.value}
                    keyboardType={"phone-pad"}
                    onChangeText={value => this.setState(phone2, value)}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    placeholder="Add Another Phone"
                    value={this.state.phone3.value}
                    keyboardType={"phone-pad"}
                    onChangeText={value => this.setState(phone3, value)}
                    returnKeyType={"next"}
                  />
                </View>
              )}
            </View>
          </View>
          <View>
            <Button
              title="Sign Up"
              color="#f194ff"
              onPress={() => {this.props.navigation.navigate("Profile");}}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default SignupScreen;
