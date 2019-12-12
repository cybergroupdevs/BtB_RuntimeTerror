import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ExpoLinksView } from "@expo/samples";

export default function Drawer({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <Text>Screen 2 Page</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Item")}
      >
        <Text>Go to Item</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: "drawer"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 300,
    marginTop: 16
  }
});
