import { StyleSheet } from 'react-native';

//Styling for Helps Component (Previously offered Helps)
const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: '100%',
    backgroundColor: '#9999CC',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    marginBottom: '10%'
  },
  dateStart: {
    width: '50%',
    position: 'absolute',
    backgroundColor: '#C0C0C0',
    flex: 2,
  },
  dateEnd: {
    width: '50%',
    marginLeft: '50%',
    flex: 2,
    justifyContent: 'space-evenly'
  },
  cardViewStyle: {
    position: 'relative',
    marginTop: '1.5%',
    marginLeft: '2%',
    marginRight: '2%',
    marginBottom: '1%',
    backgroundColor: '#CC6699',
    borderRadius: 5,
  },
  cardViewStyle2: {
    flex: 1,
    marginTop: '1%',
    marginLeft: '2%',
    marginRight: '2%',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  cardText1: {
    fontSize: 15,
    color: '#000',
    textAlign: 'center',
  },
  cardText2: {
    fontSize: 15,
    color: '#000',
    textAlign: 'left',
    padding: '2%',
  },
  cardText3: {
    fontSize: 15,
    color: '#000',
    textAlign: 'left',
    padding: '1.5%',
  }
});

export default (styles);