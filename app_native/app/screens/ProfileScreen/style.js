import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FEEBFA',
        overflow: 'visible'
   },
    logoContainer: {
        marginTop:"7%",
        justifyContent: "center",
        alignItems: "center",
    },
    logoImage: {
        width: 150,
        height: 150
    },
    subContainer: {
      width:"90%",
      marginTop:"5%",   
      marginLeft: "5%",
      marginRight: "5%",   
      backgroundColor: '#EEC4E2',
      borderRadius:20,
      borderWidth:1,
      overflow:"hidden"
    },
    headerTextContainer:{
        backgroundColor:"#6F2059",
        width:"100%",
        borderBottomRightRadius:12,
        justifyContent:"center",
        padding:5
    },
    headerTextStyle:{
      color:"white",
      fontWeight:"bold",
      fontSize:18,
      marginLeft:"3%"
    },
    fieldsTextStyle: {
      fontSize:17,
    },
    content: {
      padding:10,
      flexDirection:"row",
      justifyContent:"space-between"
    },
    subContent1: {
      flexDirection:"column",
      maxWidth:"70%"
    },
    subContent2: {
      flexDirection:"column",
      maxWidth:"30%"
    },
    singleFiledContent:{
      padding:10,
      flexDirection:"column"
    },
    filePickerbuttonStyle: {
      flexDirection: 'row',
      backgroundColor: '#DDDDDD',
      padding: 5,
      borderRadius:10
    },
  
  });

  export default styles;