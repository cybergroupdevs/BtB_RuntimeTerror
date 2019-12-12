import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  MainContainer: {
    width: "100%",
    height: '100%',
    alignItems: "center",
    justifyContent: "center"
  },
  LogoContainer: {
    maxWidth: "80%",
    minWidth: "80%",
    alignItems: "center"
  },
  UserSelectionText: {
    marginTop: 15,
    fontSize: 16,
    width: '60%',
  },
  UserSelectionContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '80%',
    justifyContent: "space-between"
  },
  UserSelectionPicker: {
    width: '40%'
  },
  UserInputWrapper: {
    minWidth: '80%',
    maxWidth: '80%'
  },
  GenderSelectionContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: "space-between"
  },
  AuthorityInputWrapper: {
    minWidth: '80%',
    maxWidth: '80%'
  },
  ButtonContainer: {
    marginTop: '5%',
    marginBottom: '8%',
    minWidth: '30%',
    maxWidth: '30%',
    backgroundColor:'#A52E84'
  }, 
  LabelText:{
    maxWidth: '60%',
   
  },
});

export default styles;