import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  MainContainer: {
    width: "100%",
    height: '100%',
    alignItems: "center",
    justifyContent:"center"
  },
  LogoContainer: {
    maxWidth: "80%",
    minWidth: "80%",
    alignItems: "center"
  },
  UserSelectionContainer: {
    flex: 1,
    flexDirection: 'row',
    minWidth: '80%',
    maxWidth: '80%'
  },
  UserSelectionText: {
    paddingTop: 15,
    fontSize: 16,
    width: '50%',
    minHeight:'60%',
    maxHeight:'60%'
  },
  UserSelectionPicker: {
    width: '50%'
  },
  GenderSelectionContainer: {
    flex: 1,
    flexDirection: 'row',
    minWidth: '80%',
    maxWidth: '80%'
  },
  ButtonContainer: {
    marginTop: '5%',
    marginBottom: '5%',
    minWidth: '30%',
    maxWidth: '30%',
  },
});

export default styles;