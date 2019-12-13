import React, { Component } from "react";
import { View, TextInput, Button, Text, Picker, ScrollView, Alert } from "react-native";
import Textarea from "react-native-textarea";
import RadioForm from "react-native-simple-radio-button";
import DatePicker from "react-native-datepicker";
import styles from "./styles";

class OfferHelpScreen extends Component {
  static navigationOptions = {
    title: "Offer Help"
  };

  state = {
    userId: "",
    respondantname: "",
    helpDescription: "",
    isVolunteer: "",
    volunteerType: "",
    isShelter: 0,
    isClothings: 0,
    isFood: 1,
    isMedicine: 1,
    canAccomodate: 0,
    isAccomodating: 0,
    accomodationType: "",
    isVacant: "",
    openAfterDate: "",
    closeAfterDate: "",
    email: "",
    phone: "",
    houseBuilding: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
    landMark: "",
    latitude: "",
    longitude: "",
    agreement: "",
    isTimeBounded: 0,
    radio_props: [
      { label: "Yes", value: 1 },
      { label: "No", value: 0 }
    ]
  };

  onOfferHelp = () => {
    alert("Feel Proud, you just helped someone!")
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.MainContainer}>
          <View style={styles.SubContainer1}>
            <TextInput
              underlineColorAndroid="#6F2059"
              selectionColor="#6F2059"
              placeholder="Enter Respondant's Name"
              value={this.state.respondantname.value}
              style={{ fontSize: 18, paddingBottom: 8, paddingTop: 13 }}
              onChangeText={value => this.setState({ respondantname: value })}
              returnKeyType={"next"}
            />
            <TextInput
              underlineColorAndroid="#6F2059"
              selectionColor="#6F2059"
              placeholder="Enter Your Phone"
              value={this.state.phone.value}
              keyboardType={"phone-pad"}
              style={{ fontSize: 18, paddingBottom: 8, paddingTop: 13 }}
              onChangeText={value => this.setState({ phone: value })}
              returnKeyType={"next"}
            />
            <TextInput
              underlineColorAndroid="#6F2059"
              selectionColor="#6F2059"
              placeholder="Enter Email"
              value={this.state.email.value}
              keyboardType="email-address"
              style={{ fontSize: 18, paddingBottom: 8, paddingTop: 13 }}
              onChangeText={value => this.setState({ email: value })}
              returnKeyType={"next"}
            />
            <Textarea
              style={styles.textareaContainer}
              underlineColorAndroid="#6F2059"
              selectionColor="#6F2059"
              maxLength={200}
              placeholder="Describe the type of help you're offering"
              value={this.state.helpDescription.value}
              onChangeText={value => this.setState({ helpDescription: value })}
              returnKeyType={"next"}
            ></Textarea>
          </View>
          <View style={styles.SubContainer2}>
            <View style={styles.RadioButtonContainer}>
              <Text style={styles.LabelText}>Includes Food? :</Text>
              <RadioForm //Radio Button for Food and Water
                radio_props={this.state.radio_props}
                initial={1}
                formHorizontal={true}
                onPress={value => {
                  this.setState({ isFood: value });
                }}
                style={styles.RadioButton}
              />
            </View>
            <View style={styles.RadioButtonContainer}>
              <Text style={styles.LabelText}>Includes Medications? :</Text>
              <RadioForm //Radio Button for Medications and drugs
                radio_props={this.state.radio_props}
                initial={1}
                formHorizontal={true}
                onPress={value => {
                  this.setState({ isMedicine: value });
                }}
                style={styles.RadioButton}
              />
            </View>
            <View style={styles.RadioButtonContainer}>
              <Text style={styles.LabelText}>Includes Clothings? :</Text>
              <RadioForm //Radio Button for Volunteering
                radio_props={this.state.radio_props}
                initial={1}
                formHorizontal={true}
                onPress={value => {
                  this.setState({ isClothings: value });
                }}
                style={styles.RadioButton}
              />
            </View>
            <View style={styles.RadioButtonContainer}>
              <Text style={styles.LabelText}>willing to Volunteer? :</Text>
              <RadioForm //Radio Button for Volunteering
                radio_props={this.state.radio_props}
                initial={1}
                formHorizontal={true}
                onPress={value => {
                  this.setState({ isVolunteer: value });
                }}
                style={styles.RadioButton}
              />
            </View>
            {this.state.isVolunteer == 1 ? (
              <View style={styles.RadioButtonContainer}>
                <Text style={styles.LabelText}>Volunteering Type :</Text>
                <Picker //Picker to choose the type of Volunteer
                  selectedValue={this.state.volunteerType}
                  style={{ width: 150 }}
                  onValueChange={value =>
                    this.setState({ volunteerType: value })
                  }
                >
                  <Picker.Item
                    label="Emergency Volunteering"
                    value="Emergency Volunteering"
                  />
                  <Picker.Item
                    label="Social Volunteering"
                    value="Social Volunteering"
                  />
                  <Picker.Item
                    label="Virtual Volunteering"
                    value="Virtual Volunteering"
                  />
                  <Picker.Item
                    label="Recruit Volunteering"
                    value="Recruit Volunteering"
                  />
                </Picker>
              </View>
            ) : null}
            <View style={styles.RadioButtonContainer}>
              <Text style={styles.LabelText}>Time Bounded :</Text>
              <RadioForm //Radio Button for start and End Date
                radio_props={this.state.radio_props}
                initial={1}
                formHorizontal={true}
                onPress={value => {
                  this.setState({ isTimeBounded: value });
                }}
                style={styles.RadioButton}
              />
            </View>
            {this.state.isTimeBounded == 1 ? (
              <View style={styles.DatePickerContainer}>
                <DatePicker //Date Picker Offer Help Start Date
                  style={{ width: 150, paddingBottom: 10, paddingTop: 5 }}
                  date={this.state.dob}
                  mode="date"
                  placeholder="select start date"
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
                    this.setState({ openAfterDate: date });
                  }}
                />
                <DatePicker //Date Picker Offer Help Close Date
                  style={{ width: 150, paddingBottom: 10, paddingTop: 5 }}
                  date={this.state.dob}
                  mode="date"
                  placeholder="select end date"
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
                    this.setState({ closeAfterDate: date });
                  }}
                />
              </View>
            )
              : null}
            <View style={styles.RadioButtonContainer}>
              <Text style={styles.LabelText}>Includes Shelter? :</Text>
              <RadioForm //Radio Button for Shelter
                radio_props={this.state.radio_props}
                initial={1}
                formHorizontal={true}
                onPress={value => {
                  this.setState({ isShelter: value });
                }}
                style={styles.RadioButton}
              />
            </View>
          </View>
          {this.state.isShelter == 1 ? (
            // Address Block Starts Here
            <View style={styles.SubContainer3}>
              <TextInput
                underlineColorAndroid="#6F2059"
                selectionColor="#6F2059"
                placeholder="House/Building Number"
                value={this.state.houseBuilding.value}
                style={{ fontSize: 18, paddingBottom: 8, paddingTop: 13 }}
                onChangeText={value => this.setState({ houseBuilding: value })}
                returnKeyType={"next"}
              />
              <TextInput
                underlineColorAndroid="#6F2059"
                selectionColor="#6F2059"
                placeholder="Address Line 1"
                value={this.state.addressLine1.value}
                style={{ fontSize: 18, paddingBottom: 8, paddingTop: 13 }}
                onChangeText={value => this.setState({ addressLine1: value })}
                returnKeyType={"next"}
              />
              <TextInput
                underlineColorAndroid="#6F2059"
                selectionColor="#6F2059"
                placeholder="Address Line 2"
                value={this.state.addressLine2.value}
                style={{ fontSize: 18, paddingBottom: 8, paddingTop: 13 }}
                onChangeText={value => this.setState({ addressLine2: value })}
                returnKeyType={"next"}
              />
              <TextInput
                underlineColorAndroid="#6F2059"
                selectionColor="#6F2059"
                placeholder="City"
                value={this.state.city.value}
                style={{ fontSize: 18, paddingBottom: 8, paddingTop: 13 }}
                onChangeText={value => this.setState({ city: value })}
                returnKeyType={"next"}
              />
              <TextInput
                underlineColorAndroid="#6F2059"
                selectionColor="#6F2059"
                placeholder="State"
                value={this.state.state.value}
                style={{ fontSize: 18, paddingBottom: 8, paddingTop: 13 }}
                onChangeText={value => this.setState({ state: value })}
                returnKeyType={"next"}
              />
              <TextInput
                underlineColorAndroid="#6F2059"
                selectionColor="#6F2059"
                placeholder="Pincode"
                value={this.state.pinCode.value}
                keyboardType={"phone-pad"}
                style={{ fontSize: 18, paddingBottom: 8, paddingTop: 13 }}
                onChangeText={value => this.setState({ pinCode: value })}
                returnKeyType={"next"}
              />
              <TextInput
                underlineColorAndroid="#6F2059"
                selectionColor="#6F2059"
                placeholder="Landmark"
                value={this.state.landMark.value}
                style={{ fontSize: 18, paddingBottom: 8, paddingTop: 13 }}
                onChangeText={value => this.setState({ landMark: value })}
                returnKeyType={"next"}
              />
            </View>
          ) //Address block Ends here
            : null}
          <View style={styles.ButtonContainer}>
            <Button
              title="Offer Help"
              color="#A52E84"
              onPress={() =>{this.onOfferHelp()}}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
};

export default OfferHelpScreen;