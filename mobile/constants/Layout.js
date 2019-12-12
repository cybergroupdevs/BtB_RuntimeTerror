import { Dimensions } from 'react-native';

//Defining width and height to use throughout the app.
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

//Setting width and Height to device screen size
export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};