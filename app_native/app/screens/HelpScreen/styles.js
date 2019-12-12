import { StyleSheet } from 'react-native';
import color from '../../res/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#0033CC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize : 15,
    padding : 10,
  },
  body : {
    position: 'relative',
    padding : 20,
    justifyContent: 'center'
  },
  button: {
    position: 'absolute',
    right: '10%',
    top: '80%',
    backgroundColor:'white',
    // width: 50,
    borderRadius : 50,

  },
  addHelp: {
    width: 50,
    height: 50,
    borderRadius : 50,
  },
  card:{
    flex:1,
   width: '100%',
   height: 100,
   backgroundColor:'#9999CC',
   borderWidth: 1,
   borderColor: 'blue',
   borderRadius:5
 },
 dateStart:{
   width: '50%',
   position:'absolute',
   backgroundColor:'#C0C0C0',
   flex:2,
 },
 dateEnd:{
   width: '50%',
   marginLeft:'50%',
   flex:2,
 },
  cardViewStyle:{
    // flex: 2,
    position:'relative',
   marginTop:'1.5%',
   marginLeft:'2%',
   marginRight:'2%',
   marginBottom:'1%',
   backgroundColor:'#CC6699',
   borderRadius:5,
 },
 cardViewStyle2:{
   flex:1,
  marginTop:'1%',
  marginLeft:'2%',
  marginRight:'2%',
  backgroundColor:'white',
  borderRadius:5,
},
 cardText1:{
   fontSize: 15,
   color: '#000',
   textAlign: 'center',
 },
 cardText2:{
   fontSize: 15,
   color: '#000',
   textAlign: 'left',
   padding:'2%',
 },
 cardText3:{
   fontSize: 15,
   color: '#000',
   textAlign: 'left',
   padding:'1.5%',
 },
 expand:{
   position: 'absolute',
   right: '2%',
   top: '60%',
   padding:'1%',
 },
 expandView:{
   fontSize: 20,
 }

});
