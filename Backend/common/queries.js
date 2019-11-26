const {getColumnsAndValues} = require('./function')

exports.userSignup = (data) => {
    const reqData = getColumnsAndValues(data);
    return `insert into Users(${reqData.columns}) values(${reqData.Values})`; 
};

exports.NGOSignup = (data) => {
    const reqData = getColumnsAndValues(data);
    return `insert into authorities(${reqData.columns}) values(${reqData.Values})`; 
};

exports.raiseRescueRequest = (data) => {
    const reqData = getColumnsAndValues(data);
    return `insert into RescueDetails(${reqData.columns}) values(${reqData.Values})`; 
};

exports.getRequestList = (data) => {
    return `select * from RescueDetails where isActive = 1`; 
};
