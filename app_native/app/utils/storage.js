import AsyncStorage from '@react-native-community/async-storage';

var storage = {
  getItem: async (key) => {
    return JSON.parse(await AsyncStorage.getItem(key))
  },

  setItem: async (key, value) => {
    return await AsyncStorage.setItem(key, JSON.stringify(value))
  },

  removeItem: async (key) => {
    return await AsyncStorage.removeItem(key)
  },
}
module.exports = storage;



