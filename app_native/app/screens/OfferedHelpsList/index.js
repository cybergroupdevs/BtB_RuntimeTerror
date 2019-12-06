import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';

import OfferHelp from "../../assets/images/add-circle.png"
import styles from './styles';

class OfferedHelpsList extends Component {

  _onPress = () => {
    Alert.alert("Offer Help Details");
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Previous Helps</Text>
        </View>
        <ScrollView style={styles.main}>
          <View style={styles.body}>
            <Help />
          </View>
          <View style={styles.body}>
            <Help />
          </View>
          <View style={styles.body}>
            <Help />
          </View>
          <View style={styles.body}>
            <Help />
          </View>
          <View style={styles.body}>
            <Help />
          </View>
          <View style={styles.body}>
            <Help />
          </View>
          <View style={styles.body}>
            <Help />
          </View>
        </ScrollView>
        <View style={styles.button}>
          <TouchableOpacity onPress={this._onPress} style={styles.addButton}>
            <Image source={OfferHelp} style={styles.addHelp}></Image>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default (OfferedHelpsList);