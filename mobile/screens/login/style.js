import { StyleSheet } from "react-native";

//Styling for the signin screen
const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    marginTop: "20%"
  },
  LogoContainer: {
    width: "100%",
    alignItems: "center"
  },
  ButtonContainer: {
    marginTop: "5%",
    marginBottom: "5%",
    minWidth: "30%",
    maxWidth: "30%"
  },
  LogoImage: {
    marginTop: "5%",
  },
  InputContainer: {
    minWidth: "80%",
    maxWidth: "80%"
  },
  TextContainer: {
    width: "80%",
    marginTop: "1%",
    justifyContent: "space-between",
    flexDirection: "row"
  }
});

export default styles;
