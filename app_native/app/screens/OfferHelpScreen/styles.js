import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  MainContainer: {
    width: "100%",
    height: '100%',
    alignItems: "center",
    marginBottom: "20%"
  },
  SubContainer1: {
    marginTop: '10%',
    width: '80%'
  },
  textareaContainer: {
    height: 180,
    backgroundColor: '#F5FCFF',
  },
  SubContainer2: {
    marginTop: '5%',
    width: '80%'
  },
  RadioButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: "space-between",
  },
  RadioButton: {
    width: '40%',
  },
  LabelText:{
    maxWidth: '60%',
     padding: 15, 
     fontSize: 15
  },
  SubContainer3: {
    marginTop: '2%',
    width: '80%'
  },
  ButtonContainer: {
    marginTop: '5%',
    marginBottom: '2%',
    minWidth: '50%',
    maxWidth: '50%',
  },
  DatePickerContainer:{
    flex: 1,
    flexDirection: 'row'
  }
});

export default styles;