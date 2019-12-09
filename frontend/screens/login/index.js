import React, { Component } from "react";
import { View, TextInput, Button, Image, Text } from "react-native";
import styles from "./style";
import AashrayLogo from "../../assets/images/AashrayLogo.png";
// import {postAsync} from "../../services/callApi"


// export default function SigninScreen({navigation}) {
class SigninScreen extends Component {
  static navigationOptions = {
    title: "Login"
  };

  state = {
    email: "",
    password: ""
  };

  onLoginHandler = async() => {
    const authData = {
      Email: "singhal@",
      password: "abc"
    };
    var data = await fetch("http://172.25.123.124:8000/api/login", {
      method: "POST",
      headers: {'Content-Type': "application/json"}
      // body: JSON.stringify(authData)
    });
    // let responseJson = await data.json();
    console.log(await data.json())
    // this.props.onLogin(authData);
  };
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.LogoContainer}>
          <Image source={AashrayLogo} style={styles.LogoImage} />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            underlineColorAndroid="#6F2059"
            selectionColor="#6F2059"
            placeholder="Email or Phone"
            value={this.state.email.value}
            style={{ fontSize: 24, paddingBottom: 10, paddingTop: 13 }}
            onChangeText={value => this.setState({ email: value })}
            keyboardType="email-address"
            returnKeyType={"next"}
            onSubmitEditing={() => {
              this.password.focus();
            }}
          />
          <TextInput
            underlineColorAndroid="#6F2059"
            selectionColor="#428AF8"
            placeholder="Enter password"
            value={this.state.password.value}
            style={{ fontSize: 24, paddingBottom: 10, paddingTop: 13 }}
            onChangeText={value => this.setState({ password: value })}
            ref={input => {
              this.password = input;
            }}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.ButtonContainer}>
          <Button
            title="Sign In"
            color="#A52E84"
            onPress={() => this.onLoginHandler()}
          />
        </View>
        <View style={styles.TextContainer}>
          <Text
            onPress={() => this.props.navigation.navigate("Profile")}
            style={{
              fontSize: 16,
              color: "blue",
              textDecorationLine: "underline"
            }}
          >
            Forgot Password?
          </Text>
          <Text
            onPress={() => this.props.navigation.navigate("Signup")}
            style={{
              fontSize: 16,
              color: "blue",
              textDecorationLine: "underline"
            }}
          >
            Register Here
          </Text>
        </View>
      </View>
    );
  }
}

export default SigninScreen;
