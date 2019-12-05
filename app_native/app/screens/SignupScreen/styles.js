import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  MainContainer: {
    width: "100%",
    height: '100%',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20%"
  },
  SubContainer: {
    marginBottom: "10%"
  },
  LogoContainer: {
    maxWidth: "80%",
    minWidth: "80%",
    alignItems: "center"
  },
  UserSpecificContainers: {

  },
  UserSelectionContainer: {
    flex: 1,
    flexDirection: 'row',
    minWidth: '80%',
    maxWidth: '80%',
    marginBottom: 10,
  },
  UserSelectionText: {
    marginTop: 15,
    fontSize: 16,
    width: '60%',
  },
  UserSelectionPicker: {
    width: '40%'
  },
  UserInputWrapper: {
    //backgroundColor:'maroon'
  },
  GenderSelectionContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: "space-between"
  },
  AuthorityInputWrapper: {
    backgroundColor: 'blue'
  },
  ButtonContainer: {
    marginBottom: '5%',
    minWidth: '50%',
    maxWidth: '50%',
  },
});

export default styles;