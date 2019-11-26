const {runQuery} = require('../common/function');
const Response = require('../common/response');
const isEmpty = require('lodash.isempty');
const {userSignup} = require('../common/queries');

exports.login = async (req, res) => {
    const data = await runQuery('select * from usertypes');
    if(data.error) Response.InternalServerError(res, data.error); 
    else if(data.recordset.length === 0) Response.NotFound(res, "No data"); 
    else Response.Success(res, data.recordset); 
};
exports.signup = async (req, res) => {
    if(isEmpty(req.body)){ Response.BadRequest(res, "No data to post") }
    else {
        const data = await runQuery(userSignup(req.body));
        if(!data.error) Response.Success(res);
        else Response.InternalServerError(res, data.error, data.message); 
    }
};
exports.changePassword = async (req, res) => {
    if(isEmpty(req.body)){ Response.BadRequest(res, "No data to post") }
    else {
        const data = await runQuery(userSignup(req.body));
        if(!data.error) Response.Success(res);
        else Response.InternalServerError(res, data.error, data.message); 
    }
};
exports.forgotPassword = async (req, res) => {
    if(isEmpty(req.body)){ Response.BadRequest(res, "No data to post") }
    else {
        const data = await runQuery(userSignup(req.body));
        if(!data.error) Response.Success(res);
        else Response.InternalServerError(res, data.error, data.message); 
    }
};
exports.verifyPhone = async (req, res) => {
    if(isEmpty(req.body)){ Response.BadRequest(res, "No data to post") }
    else {
        const data = await runQuery(userSignup(req.body));
        if(!data.error) Response.Success(res);
        else Response.InternalServerError(res, data.error, data.message); 
    }
};
exports.verifyEmail = async (req, res) => {
    if(isEmpty(req.body)){ Response.BadRequest(res, "No data to post") }
    else {
        const data = await runQuery(userSignup(req.body));
        if(!data.error) Response.Success(res);
        else Response.InternalServerError(res, data.error, data.message); 
    }
};