import React from "react";
import { ScrollView, StyleSheet,Text,TouchableOpacity } from "react-native";
import { ExpoLinksView } from "@expo/samples";

export default function LinksScreen({navigation}) {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <Text>Items Page</Text>
            <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Links")}
      >
        <Text>Go to Links</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: "Items"
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