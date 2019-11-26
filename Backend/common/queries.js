const {getColumnsAndValues} = require('./function')

exports.getAllDataCheck = `select * from Persons`;

exports.insertDataCheck = (data) => { 
    const reqData = getColumnsAndValues(data);
    return `insert into Persons(${reqData.columns}) values(${reqData.Values})`; 
}

exports.userSignup = (data) => {
    const reqData = getColumnsAndValues(data);
    return `insert into Users(${reqData.columns}) values(${reqData.Values})`; 
}
