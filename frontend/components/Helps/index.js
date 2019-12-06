import React from "react";
import { View,Text, ScrollView, StyleSheet,TouchableOpacity} from "react-native";
import styles from './styles'

 const Help =() =>{
    return (
      <View style={styles.card} >
        <View style={styles.cardViewStyle}>
          <View style={styles.dateStart}>
            <Text style={styles.cardText1}>{"Start Date"}</Text>
          </View>
          <View style={styles.dateEnd}>
            <Text style={styles.cardText1}>{"End Date"}</Text>
          </View>
        </View>
        <View  style={styles.cardViewStyle2}>
          <Text style={styles.cardText2}>{"Address:"}</Text>
          <Text style={styles.cardText3}>{"Contact:"}</Text>

          <View style={styles.expand}>
            <TouchableOpacity style={styles.expandMe}>
              <Text style={styles.expandView}>></Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
};

export default Help;
