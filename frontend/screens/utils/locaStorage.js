import { AsyncStorage } from "react-native";
import JWT from 'expo-jwt';

export const storData = async(key,data) =>{
    try {
        await AsyncStorage.setItem(key, data);
      } catch (error) {
        // Error saving data
      }
};

export const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // We have data!!
        return value;
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  export const getDecodedToken = (token)=>{
    const key =  'secretkey';
    return JWT.decode(token, key);
  }

