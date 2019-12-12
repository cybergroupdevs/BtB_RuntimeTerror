import { AsyncStorage } from "react-native";
import JWT from 'expo-jwt';

//Generic Method to save Data in LocalStorage
export const storData = async(key,data) =>{
    try {
        await AsyncStorage.setItem(key, data);
      } catch (error) {
        // Error saving data
      }
};

//Generic Method to Retreive Data from LocalStorage
export const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      }
    } catch (error) {
    }
};

//Generic Method to Decode Token and Retrieve Data
export const getDecodedToken = (token)=>{
    const key =  'secretkey';
    return JWT.decode(token, key);
};

