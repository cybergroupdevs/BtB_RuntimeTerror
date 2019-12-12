import { StyleSheet } from "react-native";

//Styling for ProfileScreen
const styles = StyleSheet.create({
  container: {
    overflow: "visible"
  },
  logoContainer: {
    marginTop: "7%",
    justifyContent: "center",
    alignItems: "center"
  },
  logoImage: {
    width: 150,
    height: 150
  },
  subContainer: {
    width: "90%",
    marginTop: "5%",
    marginLeft: "5%",
    marginRight: "5%",
    backgroundColor: "#EEC4E2",
    borderRadius: 20,
    borderWidth: 1,
    overflow: "hidden"
  },
  headerTextContainer: {
    backgroundColor: "#6F2059",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderBottomRightRadius: 12,
    padding: 5
  },
  headerTextStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: "3%"
  },
  fieldsTextStyle: {
    fontSize: 17,
    paddingLeft:3
  },
  content: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  subContent1: {
    flexDirection: "column",
    maxWidth: "70%"
  },
  subContent2: {
    flexDirection: "column",
    maxWidth: "30%"
  },
  singleFiledContent: {
    padding: 10,
    flexDirection: "column"
  },
  filePickerbuttonStyle: {
    flexDirection: "row",
    backgroundColor: "#DDDDDD",
    padding: 5,
    borderRadius: 10
  },
  ifVerifiedStyle: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: "bold"
  },
  verifyButton: {
    backgroundColor: "green",
    marginLeft: "30%",
    marginRight: "30%",
    marginBottom: "8%",
    marginTop: "5%",
    alignItems: "center",
    borderRadius: 10
  },
  verifyButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    paddingBottom: 8,
    paddingTop: 8
  },
  concelUpdateButton: {
    alignItems: "center",
    borderRadius: 10
  },
  cancelUpdateButtonText: {
    fontSize: 15,
    color: "white",
    paddingBottom: 12,
    paddingTop: 8,
    paddingLeft: 15,
    paddingRight: 15,
    fontWeight: "bold"
  },
  editTextInputStyle: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 10,
    fontSize: 18,
    marginTop: 10
  },
  editButtonStyle: {
    backgroundColor: "orange",
    marginRight: 8,
    alignItems: "center",
    borderRadius: 10
  },
  editButtonTextStyle: {
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 6,
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default styles;
