import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Image, ScrollView, StyleSheet, Dimensions, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.parentScrollViewStyle}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.childScrollViewStyle}
      >
        <Image
          source={require("../assets/images/MapImage.png")}
          resizeMode="contain"
        />
      </ScrollView>
    </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  title: "Home",
  headerRight: (
    <Ionicons
      name="md-notifications-outline"
      size={28}
      color="black"
      onPress={() => {
        Alert.alert("not implemented yet");
      }}
      style={{ marginRight: 15 }}
    />
  )
};

const styles = StyleSheet.create({
  parentScrollViewStyle: {
    height: height - 500,
    borderWidth: 1,
    borderColor: "#D3D3D3"
  },
  childScrollViewStyle: {
    borderWidth: 1,
    borderColor: "#D3D3D3"
  },
  gridStyle: {
    width: "100%",
    marginTop: 20
  }
});
