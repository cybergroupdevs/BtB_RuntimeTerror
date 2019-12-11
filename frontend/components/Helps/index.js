import React from "react";
import { View,Text, ScrollView, StyleSheet,TouchableOpacity} from "react-native";
import styles from './styles'

 const Help =() =>{
    return (
      <View style={styles.card} >
        <View style={styles.cardViewStyle}>
          <View style={styles.dateStart}>
            <Text style={styles.cardText1}>{"10/11/2019"}</Text>
          </View>
          <View style={styles.dateEnd}>
            <Text style={styles.cardText1}>{"12/12/2019"}</Text>
          </View>
        </View>
        <View  style={styles.cardViewStyle2}>
          <Text style={styles.cardText2}>{"Address:"} Plot no B9, Cyber Group Noida</Text>
          <Text style={styles.cardText3}>{"Contact:"} +91-8449961949</Text>
          <View style={styles.expand}>
            <TouchableOpacity style={styles.expandMe}>
              <Text style={styles.expandView}></Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
};

export default Help;
