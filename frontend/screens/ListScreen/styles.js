import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    textContainer: {
      fontSize: 22,
      fontWeight: "700",
      paddingHorizontal: 20
    },
    parentContainer: {
      backgroundColor: "white",
      paddingTop: 20,
      flex: 1
    },
    defaultText: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      fontSize: 25,
      color: "red",
      paddingTop: 20,
      paddingLeft: 50
    },
    button: {
      position: 'absolute',
      right: '10%',
      top: '100%',
      backgroundColor: 'white',
      borderRadius: 50,
  
    },
    addHelp: {
      width: 50,
      height: 50,
      borderRadius: 50,
    },
  });

export default (styles);