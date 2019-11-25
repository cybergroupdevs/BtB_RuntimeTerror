const isEmpty = require('lodash.isempty');

const {runQuery} = require('../common/function');
const Response = require('../common/response');
const {insertDataCheck,  getAllDataCheck} = require('../common/queries');

exports.checkingApi = async (req, res) => {
    const data = await runQuery(getAllDataCheck);
    if(data.error) Response.InternalServerError(res, data.error); 
    else if(data.recordset.length === 0) Response.NotFound(res, "No data"); 
    else Response.Success(res, data.recordset); 
};

exports.checkingPostApi = async (req, res) => {
    if(isEmpty(req.body)){ Response.BadRequest(res, "No data to post") }
    else {
        const data = await runQuery(insertDataCheck(req.body));
        if(!data.error) Response.Success(res);
        else Response.InternalServerError(res, data.error, data.message); 
    }
};


