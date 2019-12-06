import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';

import Help from "../../components/Helps/index";
import addButtonLogo from "../../assets/images/add-circle.png"
import styles from './styles';

export default class App extends React.Component {
  static navigationOptions = {
    title: "Helps List"
  };
  _onPress = () => {
    Alert.alert("Offer Help Details");
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.main}>
            <Help />
            <Help />
            <Help />
            <Help />
        </ScrollView>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate("OfferHelp")}}
           style={styles.addButton}>
            <Image source={addButtonLogo} style={styles.addHelp}></Image>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
