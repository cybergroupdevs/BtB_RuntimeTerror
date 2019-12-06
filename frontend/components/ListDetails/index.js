/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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
// import { Colors } from "react-native/Libraries/NewAppScreen";

export default class ListDetails extends Component {
  render() {
    // {console.log("Params : "+this.props.navigation.state.params)}
    // {
    //   console.log("state : " + this.props.navigation.state);
    // }
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.parentContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.subContainer1}>
            <Text style={styles.textContainer}>
              {" "}
              {navigation.state.params.categoryName}{" "}
            </Text>
          </View>
          <View style={styles.subContainer2}>
            <View style={styles.imageContainer}>
              <Image
                source={navigation.state.params.imageUri}
                style={styles.image}
              />
            </View>
            <View>
              <View style={styles.callButton}>
                <Button
                  title={navigation.state.params.phoneNumber}
                  color="white"
                  overrides={true}
                  theme="dark"
                ></Button>
              </View>
              <View style={styles.callButton}>
                <Button
                  title={navigation.state.params.phoneNumber}
                  color="white"
                >
                  <Text style={{ color: "#ff0000" }}></Text>
                </Button>
              </View>
              <View style={styles.callButton}>
                <Button
                  title={navigation.state.params.phoneNumber}
                  color="white"
                ></Button>
              </View>
            </View>
          </View>
          <View style={styles.subContainer3}>
            <Text style={styles.Name}>{navigation.state.params.name}</Text>
          </View>
          <View style={styles.subContainer4}>
            <Text style={styles.textLabel}>
              {navigation.state.params.email}
            </Text>
            <Text style={styles.textLabel}>
              {navigation.state.params.address}
            </Text>
            <Text style={styles.textLabel}>{navigation.state.params.city}</Text>
            <Text style={styles.textLabel}>
              {navigation.state.params.pinCode}
            </Text>
            <Text style={styles.textLabel}>
              {navigation.state.params.state}
            </Text>
            <Text style={styles.textLabel}>
              {navigation.state.params.country}
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
