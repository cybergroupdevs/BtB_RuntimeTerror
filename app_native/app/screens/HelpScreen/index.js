import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  Button,
  Image,
} from 'react-native';

import CardView from 'react-native-cardview' ;
import Help from '../../component';
import addButtonLogo from "../../assets/images/add-circle.png";
import styles from './styles';

export default class App extends React.Component {
  _onPress = () =>
  {
    Alert.alert("Offer Help Details");
  }
   render() {

      return (
         <View style={styles.container}>

          <View style={styles.header}>
            <Text style={styles.headerText}>Previous Help
            </Text>
          </View>

          <ScrollView style={styles.main}>
            <View style={styles.body}>
              <Help />
            </View>
            <View style={styles.body}>
              <Help/>
            </View>
            <View style={styles.body}>
              <Help/>
            </View>
            <View style={styles.body}>
              <Help/>
            </View>
            <View style={styles.body}>
              <Help/>
            </View>
            <View style={styles.body}>
              <Help/>
            </View>
            <View style={styles.body}>
              <Help/>
            </View>
          </ScrollView>

          <View style={styles.button}>

            <TouchableOpacity onPress={this._onPress} style={styles.addButton}>

              <Image source={addButtonLogo} style={styles.addHelp}></Image>

            </TouchableOpacity>
          </View>

         </View>
      );
   }
}
