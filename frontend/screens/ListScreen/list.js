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

class ListScreen extends Component {
  static navigationOptions = {
    title: "List"
  };
  state = {
    NGOUri: require("../../assets/images/home.jpg"),
    GovtShelterUri: require("../../assets/images/home.jpg"),
    PrivatePropertyUri: require("../../assets/images/home.jpg")
  };
  arr = [
    { name: "NGO 1", distance: "--away" },
    { name: "NGO 2", distance: "--away" },
    { name: "NGO 3", distance: "--away" },
    { name: "NGO 4", distance: "--away" },
    { name: "NGO 5", distance: "--away" }
  ];
  render() {
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
                {this.arr.map((item, index) => {
                  return (
                    <List
                      key={index}
                      imageUri={this.state.NGOUri}
                      name={item.name}
                      distance={item.distance}
                    />
                  );
                })}
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
                  imageUri={this.state.NGOUri}
                  name="NGO Name"
                  distance=" -- away"
                />
                <List
                  imageUri={this.state.NGOUri}
                  name="NGO Name"
                  distance=" -- away"
                />
                <List
                  imageUri={this.state.NGOUri}
                  name="NGO Name"
                  distance=" -- away"
                />
                <List
                  imageUri={this.state.NGOUri}
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
                  imageUri={this.state.NGOUri}
                  name="NGO Name"
                  distance=" -- away"
                />
                <List
                  imageUri={this.state.NGOUri}
                  name="NGO Name"
                  distance=" -- away"
                />
                <List
                  imageUri={this.state.NGOUri}
                  name="NGO Name"
                  distance=" -- away"
                />
                <List
                  imageUri={this.state.NGOUri}
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
}

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
});

export default ListScreen;
