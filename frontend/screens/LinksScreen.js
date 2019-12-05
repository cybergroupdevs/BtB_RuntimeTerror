import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity,Text } from "react-native";
import { ExpoLinksView } from '@expo/samples';

export default function LinksScreen({navigation}) {
  return (
    <ScrollView style={styles.container}>
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
  title: 'Links',
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
