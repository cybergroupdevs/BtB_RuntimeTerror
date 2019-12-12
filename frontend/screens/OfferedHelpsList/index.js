import React from 'react';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Help from "../../components/Helps/index";
import addButtonLogo from "../../assets/images/add-circle.png"
import styles from './styles';

class OfferedHelpsList extends React.Component {
  static navigationOptions = {
    title: "Helps List"
  };

  //Return list of previously offered helps
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
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => { this.props.navigation.navigate("OfferHelp") }} >
            <Image
              source={addButtonLogo}
              style={styles.addHelp}>
            </Image>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default (OfferedHelpsList);