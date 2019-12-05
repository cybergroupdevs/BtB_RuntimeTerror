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
  render
} from "react-native";
// import App from '../App';

// class Lists{
// const List: () => React$Node = () => {
class List extends Component {
  render() {
    return (
      <View
        style={{
          height: 130,
          width: 130,
          marginLeft: 20,
          borderWidth: 1,
          borderColor: "#dddddd"
        }}
      >
        <View style={{ flex: 2 }}>
          <Image
            source={this.props.imageUri}
            style={{ flex: 1, height: null, width: null, resizeMode: "cover" }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ paddingLeft: 25, paddingTop: 10 }}>
            {this.props.name}
          </Text>
          <Text style={{ paddingLeft: 25, paddingBottom: 10 }}>
            {this.props.distance}
          </Text>
        </View>
      </View>
    );
  }
}

export default List;
const styles = StyleSheet.create({
  textContainer: {
    fontSize: 22,
    fontWeight: "700",
    paddingHorizontal: 20
  },
  parentContainer: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 1
  }
  //  imageContainer:{},
  //  subHeadingsContainer:{},
});
