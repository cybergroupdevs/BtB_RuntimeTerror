import AsyncStorage from '@react-native-community/async-storage';
import localStorage from '../utils/storage';
import { LEAVE_REQUEST, GET_LEAVE_TYPES, HOLIDAY, GET_APPROVALS, GET_BALANCE, EMPLOYEE_GET } from '../constants';

const STATUS_CODE_SUCCESS = 200;
const STATUS_CODE_UNAUTHORIZED = 401;
const STATUS_CODE_INTERNAL_SERVER_ERROR = 500;
const STATUS_CODE_CONFLICT = 409;

const header = async () => {
    const token = await AsyncStorage.getItem('TOKEN');
    return {
        'Authorization': "Bearer " + token.slice(1, -1),
        'Content-Type': "application/json"
    };
};

export default header;

export const getAsync = async (URL) => {
    try {
        let response = await fetch(URL, {
            method: 'GET',
            headers: await header(),
        });
        response = await handleResponse(response);
        return response.json();
    } catch (error) {
        if (error instanceof UnAuthorizedError) {
            //here we will handle session
            takeToLogin();
            return {
                success: false
            }
        } else {
            return {
                //here we will return generic error code & message
                success: false
            }
        }
    }
};

export const postAsync = async (URL, data) => {
    try {
        let response = await fetch(URL, {
            method: 'POST',
            headers: await header(),
            body: JSON.stringify(data)
        });
        response = await handleResponse(response);
        return response.json();
    } catch (error) {
        if (error instanceof UnAuthorizedError) {
            //here we will handle session
            takeToLogin();
            return {
                success: false
            }
        } else {
            return {
                //here we will return generic error code & message
                success: false
            }
        }
    }
};

export const putAsync = async (URL, data, ) => {
    try {
        let response = await fetch(URL, {
            method: 'PUT',
            headers: await header(),
            body: JSON.stringify(data)
        });
        response = await handleResponse(response);
        return response.json();
    } catch (error) {
        if (error instanceof UnAuthorizedError) {
            //here we will handle session
            takeToLogin();
            return {
                success: false
            }
        } else {
            return {
                //here we will return generic error code & message
                success: false
            }
        }
    }
};


export const deleteAsync = async (URL) => {
    try {
        let response = await fetch(URL, {
            method: 'DELETE',
            headers: await header(),
        });
        response = await handleResponse(response);
        return response.json();
    } catch (error) {
        if (error instanceof UnAuthorizedError) {
            //here we will handle session
            takeToLogin();
            return {
                success: false
            }
        } else {
            return {
                //here we will return generic error code & message
                success: false
            }
        }
    }
};

const takeToLogin = async () => {
    await localStorage.removeItem('TOKEN');
    await localStorage.removeItem('id');
    await localStorage.removeItem('pass');
    await localStorage.removeItem(LEAVE_REQUEST);
    await localStorage.removeItem(GET_LEAVE_TYPES);
    await localStorage.removeItem(GET_APPROVALS);
    await localStorage.removeItem(GET_BALANCE);
    await localStorage.removeItem(HOLIDAY);
    await localStorage.removeItem(EMPLOYEE_GET);
    goToAuth();
};

const handleResponse = 
async (apiResponse) => {
    if (apiResponse.status !== STATUS_CODE_SUCCESS) {
        if (apiResponse.status === STATUS_CODE_UNAUTHORIZED) {
            throw new UnAuthorizedError(apiResponse);
        }
        else if (apiResponse.status === STATUS_CODE_INTERNAL_SERVER_ERROR ||
            apiResponse.status === STATUS_CODE_CONFLICT) {
            throw new Error(apiResponse);
        }
        else {
            throw new Error(apiResponse);
        }
    }
    return apiResponse;
}

class UnAuthorizedError extends Error {
    constructor(message) {
        super(message);
        this.name = "UnAuthorizedError";
    }
}