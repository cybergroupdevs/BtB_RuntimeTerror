import React, { Component } from 'react';
import {  View, TextInput,Button, Image } from 'react-native';
import styles from "./styles";
import strings from '../../res/strings';
import AashrayLogo from "../../assets/icons/AashrayLogo.png";

class SigninScreen extends Component {
  state = {
      email: "",
      password: "",
  }

  componentDidMount = async() =>{  

  };

  onLoginHandler = () => {
    const authData = {
      email: this.state.email.value,
      password: this.state.password.value
    };
    //this.props.onLogin(authData);
    console.log(authData)
  };

  render() {
    return (
        <View style={styles.Container}>
          <View style={styles.inputContainer}>
          <Image source={AashrayLogo}/>
                <TextInput
                  underlineColorAndroid="#428AF8"
                  selectionColor="#428AF8"
                  placeholder='Email or Phone'
                  value={this.state.email.value}
                  onChangeText={(value) => this.setState({email: value})}
                  keyboardType="email-address"
                  returnKeyType={"next"}
                  onSubmitEditing={() => { this.password.focus(); }}
                />
              <TextInput
                underlineColorAndroid="#428AF8"
                selectionColor="#428AF8"
                placeholder="Enter password"
                value={this.state.password.value}
                onChangeText={(value) => this.setState({password: value})}
                ref={(input) => { this.password = input; }}
                secureTextEntry={true}
              />
          </View>
          <Button
          title="Sign In"
          color="#f194ff"
          onPress={() => this.onLoginHandler()}
        />
        </View>   
    );
  }
}

export default (SigninScreen);
