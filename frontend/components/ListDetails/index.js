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
      <SafeAreaView style={styles.parentContainer}>
        <View style={{ backgroundColor: "purple" }}>
          <Text style={styles.textContainer}> {navigation.state.params.categoryName} </Text>
        </View>

        <View
          style={{
            padding: 20,
            justifyContent: "space-between",
            flexDirection: "row"
          }}
        >
          <View
            style={{
              height: 130,
              width: 130,
              marginLeft: 10,
              borderWidth: 1,
              borderColor: "#dddddd"
            }}
          >
            <Image
              source={navigation.state.params.imageUri}
              style={{
                flex: 1,
                height: null,
                width: null,
                resizeMode: "cover"
              }}
            />
          </View>
          <View>
            <Button
              style={styles.phoneNumber}
              title={navigation.state.params.phoneNumber}
            ></Button>
            <Button
              style={styles.phoneNumber}
              title={navigation.state.params.phoneNumber}
            ></Button>
            <Button
              style={styles.phoneNumber}
              title={navigation.state.params.phoneNumber}
            ></Button>
          </View>
        </View>

        <View>
          <Text
            style={{
              paddingLeft: 25,
              paddingTop: 10,
              fontSize: 25,
              fontWeight: "bold",
              textAlignVertical: "center"
            }}
          >
            {navigation.state.params.name}
          </Text>
          <View>
            <Text style={{ paddingLeft: 25, paddingTop: 10, fontSize: 17 }}>
              {navigation.state.params.email}
            </Text>
            <Text style={{ paddingLeft: 25, paddingTop: 10, fontSize: 17 }}>
              {navigation.state.params.address}
            </Text>
            <Text style={{ paddingLeft: 25, paddingTop: 10, fontSize: 17 }}>
              {navigation.state.params.city}
            </Text>
            <Text style={{ paddingLeft: 25, paddingTop: 10, fontSize: 17 }}>
              {navigation.state.params.pinCode}
            </Text>
            <Text style={{ paddingLeft: 25, paddingTop: 10, fontSize: 17 }}>
              {navigation.state.params.state}
            </Text>
            <Text style={{ paddingLeft: 25, paddingTop: 10, fontSize: 17 }}>
              {navigation.state.params.country}
            </Text>
          </View>
        </View>

        <View
          style={{
            padding: 20,
            justifyContent: "space-between",
            flexDirection: "row"
          }}
        >
          <TouchableHighlight onPress={this._onPressButton}>
            <Button title="Seek Help" style={{ backgroundColor: "purple" }} />
          </TouchableHighlight>
          <Button title="Send Message" style={styles.button} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    fontSize: 25,
    paddingHorizontal: 20,
    fontWeight: "bold",
    color: "white",
    height: 45,
    textAlignVertical: "center"
  },
  parentContainer: { backgroundColor: "white" },
  imageContainer: {},
  button: {
    backgroundColor: "purple",
    color: "white",
    fontSize: 20,
    // color:"#f194ff",
    // hover:true,
    //    'hover':{color:'grey'},
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "40%",
    height: "40",
    position: "absolute",
    bottom: 0
  },
  phoneNumber: {
    backgroundColor: "white",
    color: "black",
    fontWeight: "200"
  }
});
