import React, { Component } from 'react';
import {
  View, ImageBackground,
  Image, TextInput, ValidateDefaultButton, Button, Alert,
  Text, TouchableOpacity,
} from 'react-native';
import styles from "./styles";
import strings from '../../res/strings';
import colors from '../../res/colors';
class SigninScreen extends Component {
  static get options() {
    return {
      topBar: { visible: false, height: 0 }
    };
  }
  state = {
    display: 'none',
    isloading: false,
    showPass: true,
    eyePress: false,
    controls: {
      email: {
        value: "",
        valid: false,
        validationRules: {
          isEmail: true
        },
        touched: false
      },
      password: {
        value: "",
        valid: false,
        validationRules: {
          minLength: 6
        },
        touched: false
      }
    }
  }

  componentDidMount = async() =>{  
    var email = await localStorage.getItem('username');
    this.test = email;
    var pass = await localStorage.getItem('password');
    this.setState((prevState) => {
      return {
        controls: {
          ...prevState.controls,
          email: {
            ...prevState.controls.email,
            value: email
          }
        }
      };
    });
    if(email)
    this.updateInputState('email', email)
  };
  
  updateInputState = (key, value) => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          [key]: {
            ...prevState.controls[key],
            value: value,
            valid: validate(value, prevState.controls[key].validationRules),
            touched: true
          }
        }
      };
    });
  };

  onLoginHandler = () => {
    const authData = {
      email: this.state.email.value,
      password: this.state.password.value
    };
    //this.props.onLogin(authData);
  };

  render() {
    return (
        <View style={styles.Container}>
          <View style={styles.inputContainer}>
            <View>
                <TextInput
                  underlineColorAndroid="transparent"
                  placeholder={strings.EmailAddress}
                  value={this.state.controls.email.value}
                  onChangeText={(val) => this.updateInputState('email', val)}
                  style={[
                    styles.input,
                    !this.state.controls.email.valid
                      && this.state.controls.email.touched
                      ? styles.invalidInput : null
                  ]}
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  returnKeyType={"next"}
                  onSubmitEditing={() => { this.password.focus(); }}
                />
            </View>
            <View>
              <TextInput
                underlineColorAndroid="transparent"
                placeholder={strings.Password}
                value={this.state.controls.password.value}
                onChangeText={(val) => { this.updateInputState('password', val) }}
                style={[
                  styles.input,
                  !this.state.controls.password.valid
                    && this.state.controls.password.touched
                    ? styles.invalidInput : null
                ]}
                ref={(input) => { this.password = input; }}
                secureTextEntry={this.state.showPass}
              />
            </View>
          </View>
          <Button
          title="Sign In"
          color="#f194ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
        </View>   
    );
  }
}

export default (SigninScreen);
