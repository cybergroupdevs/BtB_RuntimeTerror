import AsyncStorage from '@react-native-community/async-storage';

//Checks if the Token is present or not (User Logged in or not)
const header = async () => {
    const token = await AsyncStorage.getItem('TOKEN');
    return {
        'Authorization': "Bearer " + token.slice(1, -1),
        'Content-Type': "application/json"
    };
};

//Generic Method to make a GET API request
export const getAsync = async (URL) => {
    let response = await fetch(URL, {
        method: 'GET',
        headers: await header(),
    });
    return response.json();
};

//Generic Method to make a POST API request
export const postAsync = async (URL, data) => {
    let response = await fetch(URL, {
        method: 'POST',
        headers: await header(),
        body: JSON.stringify(data)
    });
    return response.json();
};

//Generic Method to make a PUT request
export const putAsync = async (URL, data, ) => {
    let response = await fetch(URL, {
        method: 'PUT',
        headers: await header(),
        body: JSON.stringify(data)
    });
    return response.json();
};

//Generic Method to make a DELETE API request
export const deleteAsync = async (URL) => {
    let response = await fetch(URL, {
        method: 'DELETE',
        headers: await header(),
    });
    return response.json();
};
