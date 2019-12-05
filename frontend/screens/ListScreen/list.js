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
  TouchableOpacity
} from "react-native";
import List from "../../components/List/index";

export default function ListScreen({ navigation }) {
  return (
    <View>
      <View>
        {/* <Icon name= "search" size={20} style={{ marginRight: 10 }} /> */}
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Search"
          placeholderTextColor="grey"
          style={{ flex: 1, fontWeight: "700", backgroundColor: "white" }}
        />
      </View>

      <ScrollView>
        {/* <Button title='Details' onPress></Button> */}
        <View style={styles.parentContainer}>
          <Text style={styles.textContainer}> NGO(s)</Text>
          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <List
                imageUri={require("../../assets/images/home.jpg")}
                name="NGO Name"
                distance=" -- away"
              />
              <List
                imageUri={require("../../assets/images/home.jpg")}
                name="NGO Name"
                distance=" -- away"
              />
              <List
                imageUri={require("../../assets/images/home.jpg")}
                name="NGO Name"
                distance=" -- away"
              />
              <List
                imageUri={require("../../assets/images/home.jpg")}
                name="NGO Name"
                distance=" -- away"
              />
            </ScrollView>
          </View>
        </View>
        <View style={styles.parentContainer}>
          <Text style={styles.textContainer}> Government Shelters </Text>
          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <List
                imageUri={require("../../assets/images/home.jpg")}
                name="NGO Name"
                distance=" -- away"
              />
              <List
                imageUri={require("../../assets/images/home.jpg")}
                name="NGO Name"
                distance=" -- away"
              />
              <List
                imageUri={require("../../assets/images/home.jpg")}
                name="NGO Name"
                distance=" -- away"
              />
              <List
                imageUri={require("../../assets/images/home.jpg")}
                name="NGO Name"
                distance=" -- away"
              />
            </ScrollView>
          </View>
        </View>
        <View style={styles.parentContainer}>
          <Text style={styles.textContainer}> Private Properties </Text>
          <View style={{ height: 130, marginTop: 20 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <List
                imageUri={require("../../assets/images/home.jpg")}
                name="NGO Name"
                distance=" -- away"
              />
              <List
                imageUri={require("../../assets/images/home.jpg")}
                name="NGO Name"
                distance=" -- away"
              />
              <List
                imageUri={require("../../assets/images/home.jpg")}
                name="NGO Name"
                distance=" -- away"
              />
              <List
                imageUri={require("../../assets/images/home.jpg")}
                name="NGO Name"
                distance=" -- away"
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

ListScreen.navigationOptions = {
  title: "List"
};

const styles = StyleSheet.create({
  textContainer: {
    fontSize: 22,
    fontWeight: "700",
    paddingHorizontal: 20
  },
  parentContainer: { backgroundColor: "white", paddingTop: 20, flex: 1 }
  //  imageContainer:{},
  //  subHeadingsContainer:{},
});

//
