import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  Icon,
  Image,
  TextInput,
  render,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";

export default class ListDetails extends Component {
  // state = {
  //   categoryName: "Category",
  //   imageUri: require("../../assets/images/home.jpg"),
  //   name: "NGO 1",
  //   email: "abc@xyz",
  //   phoneNumber: "9999999",
  //   address: "address",
  //   city: "city",
  //   pinCode: "9998784",
  //   state: "delhi",
  //   country: "india"
  // }

  state = this.props.navigation.state.params;

  render() {
    {
      console.log(this.props.navigation.state.params);
    }
    const { navigation } = this.props;

    NGO = (
      <View style={styles.mainContainer}>
        <View style={styles.subContainer1}>
          <Text style={styles.textContainer}> {this.state.category} </Text>
        </View>
        <View style={styles.subContainer2}>
          <View style={styles.imageContainer}>
            <Image source={this.state.imageUri} style={styles.image} />
          </View>
          <View>
            <View style={styles.callButton}>
              <Button
                title={this.state.Phone1 ? this.state.Phone1.toString() : ""}
                color="white"
                overrides={true}
                theme="dark"
              ></Button>
            </View>
            <View style={styles.callButton}>
              <Button
                title={this.state.Phone2 ? this.state.Phone2.toString() : ""}
                color="white"
              >
                <Text style={{ color: "#ff0000" }}></Text>
              </Button>
            </View>
            <View style={styles.callButton}>
              <Button
                title={this.state.Phone3 ? this.state.Phone3.toString() : ""}
                color="white"
              ></Button>
            </View>
          </View>
        </View>
        <View style={styles.subContainer3}>
          <Text style={styles.Name}>{"Name"}</Text>
          <Text style={styles.Name}>{this.state.AuthorityName}</Text>
        </View>
        <View style={styles.subContainer4}>
          <Text style={styles.textLabel}>{"Email : " + this.state.Email}</Text>
          <Text style={styles.textLabel}>
            {"Address : " +
              this.state.HouseBuilding +
              " " +
              this.state.AddressLine1 +
              " " +
              this.state.AddressLine2}
          </Text>
          <Text style={styles.textLabel}>{"City : " + this.state.City}</Text>
          <Text style={styles.textLabel}>
            {"Pincode : " + this.state.PinCode}
          </Text>
          <Text style={styles.textLabel}>{"State : " + this.state.State}</Text>
          <Text style={styles.textLabel}>
            {"Country : " + this.state.Country}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Send Message" color="purple" />
          </View>
          <View style={styles.button}>
            <Button title="Seek Help" color="purple" />
          </View>
        </View>
      </View>
    );

    Helps = (
      <View style={styles.mainContainer}>
        <View style={styles.subContainer1}>
          <Text style={styles.textContainer}> {this.state.category} </Text>
        </View>
        <View style={styles.subContainer2}>
          <View style={styles.imageContainer}>
            <Image source={this.state.imageUri} style={styles.image} />
          </View>
          <View>
            {/* <View style={styles.callButton}>
              <Button
                title={this.state.Phone1 ? this.state.Phone1.toString() : ""}
                color="white"
                overrides={true}
                theme="dark"
              ></Button>
            </View> */}
            <View style={styles.callButton}>
              <Button
                title={this.state.Phone2 ? this.state.Phone2.toString() : ""}
                color="white"
              >
                <Text style={{ color: "#ff0000" }}></Text>
              </Button>
            </View>
            <View style={styles.callButton}>
              <Button
                title={this.state.Phone3 ? this.state.Phone3.toString() : ""}
                color="white"
              ></Button>
            </View>
          </View>
        </View>
        <View style={styles.subContainer3}>
          <Text style={styles.Name}>{"OpenDate : " + this.state.OpenDate}</Text>
          <Text style={styles.Name}>
            {"CloseDate : " + this.state.CloseDate}
          </Text>
        </View>
        <View style={styles.subContainer4}>
          <Text style={styles.textLabel}>
            {"Help Description : " + this.state.HelpDescription}
          </Text>
          <Text style={styles.textLabel}>
            {"Address : " +
              this.state.HouseBuilding +
              " " +
              this.state.AddressLine1 +
              " " +
              this.state.AddressLine2}
          </Text>
          <Text style={styles.textLabel}>{"City : " + this.state.City}</Text>
          <Text style={styles.textLabel}>
            {"Pincode : " + this.state.PinCode}
          </Text>
          <Text style={styles.textLabel}>{"State : " + this.state.State}</Text>
          <Text style={styles.textLabel}>
            {"Country : " + this.state.Country}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Send Message" color="purple" />
          </View>
          <View style={styles.button}>
            <Button title="Seek Help" color="purple" />
          </View>
        </View>
      </View>
    );

    RescueRequest = (
      <View style={styles.mainContainer}>
        <View style={styles.subContainer1}>
          <Text style={styles.textContainer}> {this.state.category} </Text>
        </View>
        <View style={styles.subContainer2}>
          <View style={styles.imageContainer}>
            <Image source={this.state.imageUri} style={styles.image} />
          </View>
          <View>
            {/* <View style={styles.callButton}>
              <Button
                title={this.state.Phone1 ? this.state.Phone1.toString() : ""}
                color="white"
                overrides={true}
                theme="dark"
              ></Button>
            </View> */}
            {/* <View style={styles.callButton}>
              <Button
                title={this.state.Phone2 ? this.state.Phone2.toString() : ""}
                color="white"
              >
                <Text style={{ color: "#ff0000" }}></Text>
              </Button>
            </View>
            <View style={styles.callButton}>
              <Button
                title={this.state.Phone3 ? this.state.Phone3.toString() : ""}
                color="white"
              ></Button>
            </View> */}
          </View>
        </View>
        <View style={styles.subContainer3}>
          <Text style={styles.Name}>{"RequestTime : " + this.state.RequestTime}</Text>
          <Text style={styles.Name}>
            {"Raised By : " + this.state.RaisedByUser}
          </Text>
        </View>
        <View style={styles.subContainer4}>
          <Text style={styles.textLabel}>
            {"Latitude : " + this.state.Latitude}
          </Text>
          <Text style={styles.textLabel}>{"City : " + this.state.City}</Text>
          <Text style={styles.textLabel}>
            {"Longitude : " + this.state.Longitude}
          </Text>
          <Text style={styles.textLabel}>{"State : " + this.state.State}</Text>
          <Text style={styles.textLabel}>
            {"RaisedByDevice : " + this.state.RaisedByDevice}
          </Text>
        </View>
      </View>
    );

    return (
      <ScrollView style={styles.parentContainer}>
        {this.state.category == "NGO" ? NGO : (this.state.category == "Rescue Request") ? RescueRequest : Helps}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  parentContainer: {
    width: "100%",
    height: "100%"
  },
  textContainer: {
    fontSize: 25,
    paddingHorizontal: 20,
    fontWeight: "bold",
    color: "white",
    height: 45,
    textAlignVertical: "center"
  },
  subContainer1: {
    backgroundColor: "purple"
  },
  textLabel: {
    paddingLeft: 25,
    paddingTop: 10,
    fontSize: 17
  },
  callButton: {},
  Name: {
    paddingLeft: 25,
    paddingTop: 10,
    fontSize: 25,
    fontWeight: "bold"
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row"
  },
  button: {
    width: "40%",
    height: "20%"
  },

  imageContainer: {
    height: 130,
    width: 130,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "#dddddd"
  },
  subContainer3: {},
  subContainer4: {
    marginBottom: "30%"
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover"
  },
  subContainer2: {
    padding: 20,
    justifyContent: "space-between",
    flexDirection: "row"
  }
});
