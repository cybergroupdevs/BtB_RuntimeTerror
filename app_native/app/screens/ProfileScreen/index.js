import React from 'react';
import {View, ScrollView, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import styles  from './style';

class ProfileScreen extends React.Component {

    async selectFile() {
        try {
          const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
          });
          console.log('res : ' + JSON.stringify(res));
          console.log('URI : ' + res.uri);
          console.log('Type : ' + res.type);
          console.log('File Name : ' + res.name);
          console.log('File Size : ' + res.size);
        } catch (err) {
          if (DocumentPicker.isCancel(err)) {
            alert('Canceled  picker');
          } else {
            alert('Unknown Error: ' + JSON.stringify(err));
            throw err;
          }
        }
      }
  render() {
      return(
        <ScrollView style={styles.container}>
          <View style={styles.logoContainer}>
                <Image 
                    source = {require('../../assets/images/AashrayLogo.png')}
                    style = {styles.logoImage}
                />            
          </View>
          <View style = {styles.subContainer}>
             <View style = {styles.headerTextContainer}>
                 <Text style = {styles.headerTextStyle}>Personal Details</Text>
             </View>
             <View style = {styles.content}>
                <View style = {styles.subContent1}>
                  <Text style = {styles.fieldsTextStyle}>Full Name : </Text>
                  <Text style = {styles.fieldsTextStyle}>Deepak kumar bansal</Text>
                </View>
                <View style = {styles.subContent2}>
                   <Text style = {styles.fieldsTextStyle}>Gender: </Text>
                   <Text style = {styles.fieldsTextStyle}>Male</Text>
                </View>    
             </View>
             <View style = {styles.content}>
                <View style = {styles.subContent1}>
                  <Text style = {styles.fieldsTextStyle}>D.O.B : </Text>
                  <Text style = {styles.fieldsTextStyle}>21 November 2019 </Text>
                </View>
                <View style = {styles.subContent2}>
                   <Text style = {styles.fieldsTextStyle}>Phone: </Text>
                   <Text style = {styles.fieldsTextStyle}>9634349532</Text>
                </View>    
             </View>
             <View style = {styles.singleFiledContent}>
                  <Text style = {styles.fieldsTextStyle}>Email: </Text>
                   <Text style = {styles.fieldsTextStyle}>keshavbansal19960506@gmail.com</Text>
             </View>
          </View>
          <View style = {styles.subContainer}>
             <View style = {styles.headerTextContainer}>
                <Text style = {styles.headerTextStyle}>Address Details</Text>
             </View>
             <View style = {styles.singleFiledContent}>
                  <Text style = {styles.fieldsTextStyle}>House No., Building Name: </Text>
                   <Text style = {styles.fieldsTextStyle}>B-9, Pinnacle Buisness Park</Text>
             </View>
             <View style = {styles.singleFiledContent}>
                  <Text style = {styles.fieldsTextStyle}>Full Address: </Text>
                   <Text style = {styles.fieldsTextStyle}>2nd Floor, Pinnacle Park / Block B, Sector 3/ Noida, Uttar Pradesh / India </Text>
             </View>
             <View style = {styles.content}>
                <View style = {styles.subContent1}>
                  <Text style = {styles.fieldsTextStyle}>City : </Text>
                  <Text style = {styles.fieldsTextStyle}>VishakaPatnam</Text>
                </View>
                <View style = {styles.subContent2}>
                   <Text style = {styles.fieldsTextStyle}>Pincode :  </Text>
                   <Text style = {styles.fieldsTextStyle}>250002</Text>
                </View>    
             </View>
          </View>
          <View style = {[{marginBottom:"5%"},styles.subContainer]}>
             <View style = {styles.headerTextContainer}>
                <Text style = {styles.headerTextStyle}>Verification Details</Text>
             </View>
             <View style = {{alignItems:"center"},[styles.content]}>
                <TouchableOpacity
                   activeOpacity={0.5}
                   style={styles.filePickerbuttonStyle}
                   onPress={this.selectFile.bind(this)}>
                   {/*Single file selection button*/}
                   <Text style={styles.fieldsTextStyle}>
                      Click here to pick
                   </Text>
                </TouchableOpacity>
                <Text style = {styles.fieldsTextStyle}>Address Proof</Text>
             </View>
             <View style = {{alignItems:"center"},[styles.content]}>
                <TouchableOpacity
                   activeOpacity={0.5}
                   style={styles.filePickerbuttonStyle}
                   onPress={this.selectFile.bind(this)}>
                   {/*Single file selection button*/}
                   <Text style={styles.fieldsTextStyle}>
                      Click here to pick
                   </Text>
                </TouchableOpacity>
                <Text style = {styles.fieldsTextStyle}>ID Proof</Text>
             </View>
          </View>
       </ScrollView>
      );
    
  }
}


export default ProfileScreen;

