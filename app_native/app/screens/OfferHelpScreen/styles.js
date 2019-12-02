import { StyleSheet } from 'react-native';
import color from '../../res/colors'

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: color.blackColor
  },
  Container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 103
  },
  logoImage: {
    width: 190,
    height: 180
  },
  inputContainer: {
    width: "75%",
    marginTop: 25
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    paddingLeft: 20,
    backgroundColor: "#eee",
    borderColor: "#bbb",
    borderRadius: 50,
    marginTop: 8,
    marginBottom: 8
  },
  invalidInput: {
    backgroundColor: "#f9c0c0",
    borderColor: 'red'
  },
  forgotText: {
    color: '#ffffff',
    padding: 5,
    marginTop: 5,
    fontSize: 13
  },
  touchIdText: {
    color: '#039be5',
    textDecorationLine: 'underline',
    fontSize: 13
  },
  button: {
    width: "100%",
    height: 50,
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    borderWidth: 1,
  },

  spinnerTextStyle: {
    color: '#FFF'
  },
  forgotText: {
    color: 'white',
    padding: 5,
    marginTop: 5,
    fontSize: 13
  },
  eyeButton:{
    position:'absolute',
    top: 20,
    right:17
  }
});

export default styles;