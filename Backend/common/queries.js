const {getColumnsAndValues} = require('./function')

exports.getAllDataCheck = `select * from Persons`;

exports.insertDataCheck = (data) => { 
    const reqData = getColumnsAndValues(data);
    return `insert into Persons(${reqData.columns}) values(${reqData.Values})`; 
};

exports.userSignup = (data) => {
    const reqData = getColumnsAndValues(data);
    return `insert into Users(${reqData.columns}) values(${reqData.Values})`; 
};

exports.userSignupNew = (data) => {
    if (data.UserType == 'User'.toLowerCase()){
        const reqData = getColumnsAndValues(data);
        return `insert into Users(${reqData.columns}) values(${reqData.Values})`;
    }else{
        const reqData = getColumnsAndValues(data);
        return `insert into Authorities(${reqData.columns}) values(${reqData.Values})`;
    }
};

exports.raiseRescueRequest = (data) => {
    const reqData = getColumnsAndValues(data);
    return `insert into RescueDetails(${reqData.columns}) values(${reqData.Values})`; 
};

exports.getRequestList = (data) => {
    return `select * from RescueDetails where isActive = 1`; 
};
