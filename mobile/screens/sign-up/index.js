import React, { Component } from "react";
import {  View,  TextInput,  Picker,  Text,  Image,  ScrollView,  TouchableOpacity} from "react-native";
import DatePicker from "react-native-datepicker";
import AashrayLogo from "../../assets/images/AashrayLogo.png";
import styles from "./styles";
import  {baseURL, signupUser, signupNGO} from '../../constants/apiRoutes'; 

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

  apiCall = async(url,data)=>{
    const res = await fetch(url,{
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(data)
    })
    return res.json();
  };

  onSignupHandler = async() => {
    if (this.state.usertype === "User") {
     const signupdata  = {
        UserName: this.state.firstname+'_'+this.state.lastname,
        UserTypeId: 5,
        FirstName: this.state.firstname,
        MiddleName: this.state.middlename,
        LastName: this.state.lastname,
        DOB: this.state.dob,
        Gender: this.state.gender,
        Email: this.state.email,
        Password: this.state.password,
        Phone: this.state.phone
      };
      const apiRes = await this.apiCall(baseURL+signupUser,signupdata);
      if(apiRes.errorMessage){
        alert("something went wrong")
      }
      else{
        alert("Registered Successfully");
        this.props.navigation.navigate("Login");
      }
    } else {
      const  signupdata = {
        UserTypeId : 4,
        AuthorityName : this.state.fullauthname,
        AuthorityFullAddress : this.state.fullauthadd,
        Email : this.state.email,
        Phone1 : this.state.phone,
        Phone2 : this.state.phone2,
        Phone3 : this.state.phone3,
        Password : this.state.password
      }
      const apiRes = await this.apiCall(baseURL+signupNGO,signupdata)
      if(apiRes.errorMessage){
        alert("something went wrong")
      }
      else{
        alert("Registered Successfully");
        this.props.navigation.navigate("Login");
      }
    }
  };

  render() {
    return (
      <ScrollView >
        <View style={styles.MainContainer}>
          <View style={styles.LogoContainer}>
            <Image
              source={AashrayLogo}
            />
          </View>
          <View style={styles.UserSelectionContainer}>
              <Text style={[styles.LabelText,{ fontSize: 18, paddingBottom: 8, paddingTop: 13} ]}>
                Signup As : {this.state.usertype}
              </Text>
              <Picker 
                selectedValue={this.state.usertype}
                style={[styles.UserSelectionPicker ]}
                onValueChange={(value) => this.setState({ usertype: value })
                }>
                <Picker.Item label="User" value="User" />
                <Picker.Item label="Authority" value="Authority" />
              </Picker>
            </View>
          <View style={styles.UserDetailContainer}>
              {this.state.usertype == 'User' ?
                <View style={styles.UserInputWrapper}>
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    style={{ fontSize: 18, paddingBottom: 8, paddingTop: 13}}
                    placeholder="First Name"
                    value={this.state.firstname.value}
                    onChangeText={(value) => this.setState({ firstname: value })}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    style={{ fontSize: 18, paddingBottom: 8, paddingTop: 13}}
                    placeholder="Middle Name"
                    value={this.state.middlename.value}
                    onChangeText={(value) => this.setState({middlename:value})}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    style={{ fontSize: 18, paddingBottom: 8, paddingTop: 13}}
                    placeholder="Last Name"
                    value={this.state.lastname.value}
                    onChangeText={(value) => this.setState({lastname:value})}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    style={{ fontSize: 18, paddingBottom: 8, paddingTop: 13}}
                    placeholder="Phone Number"
                    value={this.state.phone.value}
                    keyboardType={'phone-pad'}
                    onChangeText={(value) => this.setState({phone:value})}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    placeholder="Enter your Email"
                    style={{ fontSize: 18, paddingBottom: 8, paddingTop: 13}}
                    value={this.state.email.value}
                    onChangeText={(value) => this.setState({email:value})}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    style={{ fontSize: 18, paddingBottom: 8, paddingTop: 13}}
                    placeholder="Enter your Password"
                    value={this.state.password.value}
                    onChangeText={(value) => this.setState({password:value})}
                    returnKeyType={"next"}
                    secureTextEntry={true}
                  />
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    style={{ fontSize: 18, paddingBottom: 8, paddingTop: 13}}
                    placeholder="Re-enter your Password"
                    value={this.state.retypepass.value}
                    onChangeText={(value) => this.setState({retypepass:value})}
                    returnKeyType={"next"}
                    secureTextEntry={true}
                  />
                  <View style={styles.GenderSelectionContainer}>
                    <DatePicker
                      date={this.state.dob}
                      mode="date"
                      placeholder="DOB"
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
                      style={{ width: '40%' }}
                      onValueChange={(value) => this.setState({ gender: value })
                      }>
                      <Picker.Item label="Male" value="male" />
                      <Picker.Item label="Female" value="female" />
                      <Picker.Item label="Other" value="other" />
                    </Picker>
                  </View>
                </View>
                :
                <View style={styles.AuthorityInputWrapper}>
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    style={{ fontSize: 18, paddingBottom: 8, paddingTop: 13}}
                    placeholder="Authority's Full Name"
                    value={this.state.fullauthname.value}
                    onChangeText={(value) => this.setState({fullauthname: value})}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    style={{ fontSize: 18, paddingBottom: 8, paddingTop: 13}}
                    placeholder="Full Address"
                    value={this.state.fullauthadd.value}
                    onChangeText={(value) => this.setState({fullauthadd: value})}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    style={{ fontSize: 18, paddingBottom: 8, paddingTop: 13}}
                    placeholder="Authority's Official Email"
                    value={this.state.email.value}
                    onChangeText={(value) => this.setState({email: value})}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    style={{ fontSize: 18, paddingBottom: 8, paddingTop: 13}}
                    placeholder="Enter your Password"
                    value={this.state.password.value}
                    onChangeText={(value) => this.setState({password: value})}
                    returnKeyType={"next"}
                    secureTextEntry={true}
                  />
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    style={{ fontSize: 18, paddingBottom: 8, paddingTop: 13}}
                    placeholder="Re-enter your Password"
                    value={this.state.retypepass.value}
                    onChangeText={(value) => this.setState({retypepass: value})}
                    returnKeyType={"next"}
                    secureTextEntry={true}
                  />
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    style={{ fontSize: 18, paddingBottom: 8, paddingTop: 13}}
                    placeholder="Phone Number"
                    value={this.state.phone.value}
                    keyboardType={'phone-pad'}
                    onChangeText={(value) => this.setState({phone: value})}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    style={{ fontSize: 18, paddingBottom: 8, paddingTop: 13}}
                    placeholder="Add Another Phone"
                    value={this.state.phone2.value}
                    keyboardType={'phone-pad'}
                    onChangeText={(value) => this.setState({phone2: value})}
                    returnKeyType={"next"}
                  />
                  <TextInput
                    underlineColorAndroid="#6F2059"
                    selectionColor="#6F2059"
                    style={{ fontSize: 18, paddingBottom: 8, paddingTop: 13}}
                    placeholder="Add Another Phone"
                    value={this.state.phone3.value}
                    keyboardType={'phone-pad'}
                    onChangeText={(value) => this.setState({phone3: value})}
                    returnKeyType={"next"}
                  />
                </View>
              }
          </View>
         
           <TouchableOpacity onPress = {()=>{this.onSignupHandler()}}>
           <View style={[{alignItems:"center",borderRadius:10},styles.ButtonContainer]}>
             <Text style = {{color:"white",fontSize:18,paddingBottom:10,paddingTop:8}}>sign up</Text>
            
             
           
          </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default SignupScreen;
