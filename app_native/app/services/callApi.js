import AsyncStorage from '@react-native-community/async-storage';

const header = async () => {
    const token = await AsyncStorage.getItem('TOKEN');
    return {
        'Authorization': "Bearer " + token.slice(1, -1),
        'Content-Type': "application/json"
    };
};

export default header;

export const getAsync = async (URL) => {
        let response = await fetch(URL, {
            method: 'GET',
            headers: await header(),
        });
        return response.json();
};

export const postAsync = async (URL, data) => {
        let response = await fetch(URL, {
            method: 'POST',
            headers: await header(),
            body: JSON.stringify(data)
        });
        return response.json();
};

export const putAsync = async (URL, data, ) => {
        let response = await fetch(URL, {
            method: 'PUT',
            headers: await header(),
            body: JSON.stringify(data)
        });
        return response.json();
};

export const deleteAsync = async (URL) => {
        let response = await fetch(URL, {
            method: 'DELETE',
            headers: await header(),
        });
        return response.json();
};
