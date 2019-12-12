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
import {
  baseURL,
  listNGOs,
  listGovtShelters,
  listPrivateProperties,
  rescueRequest
} from "../../constants/apiRoutes";
import { getData, getDecodedToken } from "../utils/locaStorage";
import { withNavigation } from "react-navigation";

class ListScreen extends Component {
  static navigationOptions = {
    title: "Helps Nearby"
  };

  state = {
    NGOUri: require("../../assets/images/home.jpg"),
    RescueRequestsUri: require("../../assets/images/home.jpg"),
    GovtShelterUri: require("../../assets/images/home.jpg"),
    PrivatePropertyUri: require("../../assets/images/home.jpg"),
    listNGO: "",
    listGovtShelter: "",
    listPrivateProperties: "",
    listRescueRequest: "",
    showUserDetail: false,
  };

  apiCallGet = async (url, token) => {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      }
    });
    return res.json();
  };

  componentDidMount = async () => {
    this.focusListener = this.props.navigation.addListener("didFocus", () => {
      this.onRefresh();
    });
  };

  onRefresh = async () => {
    const token = await getData("token");
    console.log("token", token);
    if (typeof token !== "undefined") {
      const privateProperties = await this.apiCallGet(
        baseURL + listPrivateProperties,
        token
      );
      const rescueRequests = await this.apiCallGet(
        baseURL + rescueRequest,
        token
      );
      this.setState({
        listPrivateProperties: privateProperties.errorMessage
          ? ""
          : privateProperties,
        listRescueRequest: rescueRequests.errorMessage ? "" : rescueRequests,
        showUserDetail: privateProperties.errorMessage ? false : true
      });
    }
    const NGO = await this.apiCallGet(baseURL + listNGOs);
    const govtShelters = await this.apiCallGet(baseURL + listGovtShelters);
    this.setState({
      listNGO: NGO.errorMessage ? "" : NGO,
      listGovtShelter: govtShelters.errorMessage ? "" : govtShelters
    });
  }

  navigateToDetailPage = data => {
    this.props.navigation.navigate("ListDetail", data);
  };

  render() {
    privateProperties = (
      <View style={[styles.parentContainer]}>
        <Text style={styles.textContainer}> Private Properties </Text>
        <View style={{ height: 130, marginTop: 20 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {typeof this.state.listPrivateProperties === "object" ? (
              this.state.listPrivateProperties.data.map((item, index) => {
                return (
                  <List
                    key={index}
                    imageUri={this.state.NGOUri}
                    category={"Private Properties"}
                    name={item.AccomodationType}
                    distance={item.Id}
                    data={item}
                    listDetail={this.navigateToDetailPage}
                  />
                );
              })
            ) : (
              <Text style={styles.defaultText}>
                No Private properties Found
              </Text>
            )}
          </ScrollView>
        </View>
      </View>
    );

    rescue = (
      <View style={[styles.parentContainer]}>
        <Text style={styles.textContainer}> Rescue Requests </Text>
        <View style={{ height: 130, marginTop: 20 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {typeof this.state.listRescueRequest === "object" ? (
              this.state.listRescueRequest.data.map((item, index) => {
                return (
                  <List
                    key={index}
                    imageUri={this.state.NGOUri}
                    category={"Rescue Request"}
                    name={item.AccomodationType}
                    distance={item.Id}
                    data={item}
                    listDetail={this.navigateToDetailPage}
                  />
                );
              })
            ) : (
              <Text style={styles.defaultText}>No Rescue Request</Text>
            )}
          </ScrollView>
        </View>
      </View>
    );
    return (
      <View>
        <ScrollView style={{marginBottom: 25}}>
          <View style={styles.parentContainer}>
            <Text style={styles.textContainer}> NGO(s)</Text>
            <View style={{ height: 130, marginTop: 20 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {typeof this.state.listNGO === "object" ? (
                  this.state.listNGO.data.map((item, index) => {
                    return (
                      <List
                        key={index}
                        category={"NGO"}
                        imageUri={this.state.NGOUri}
                        name={item.AuthorityName}
                        distance={item.Id}
                        data={item}
                        listDetail={this.navigateToDetailPage}
                      />
                    );
                  })
                ) : (
                  <Text style={styles.defaultText}> No NGOs Found </Text>
                )}
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
                {typeof this.state.listGovtShelter === "object" ? (
                  this.state.listGovtShelter.data.map((item, index) => {
                    return (
                      <List
                        key={index}
                        category={"Government Shelters"}
                        imageUri={this.state.NGOUri}
                        name={item.AccomodationType}
                        distance={item.Id}
                        data={item}
                        listDetail={this.navigateToDetailPage}
                      />
                    );
                  })
                ) : (
                  <Text style={styles.defaultText}>No Shelters Found</Text>
                )}
              </ScrollView>
            </View>
          </View>
          {this.state.showUserDetail ? privateProperties : null}

          {this.state.showUserDetail ? rescue : null}
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
  },
  defaultText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
    color: "red",
    paddingTop: 20,
    paddingLeft: 50
  }
});

export default withNavigation(ListScreen);
