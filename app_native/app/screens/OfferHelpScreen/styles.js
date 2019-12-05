import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  MainContainer: {
    width: "100%",
    height: '100%',
    alignItems: "center",
    backgroundColor: 'green',
    marginBottom: "20%"
  },
  SubContainer1: {
    marginTop:'10%',
    width:'80%',
    backgroundColor: 'red',
  },
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: '#F5FCFF',
  },
  UserInputContainer: {
    width:'100%'
  },
  SubContainer2:{
    marginTop:'10%',
    backgroundColor: 'blue',
    width: '80%'
  },
  RadioButtonContainer:{
  flex:1,
  flexDirection:'row',
  backgroundColor:'yellow',
  width:'100%',
  justifyContent: "space-between",
  },
   RadioButton:{
    backgroundColor:'pink',
    width:'100%',
    justifyContent: "space-between",
    },
  


});

export default styles;