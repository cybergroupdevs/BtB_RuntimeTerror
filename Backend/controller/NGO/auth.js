const {runQuery} = require('../../common/function');
const Response = require('../../common/response');
const isEmpty = require('lodash.isempty');
const { NGOSignup } = require("../../common/queries");

exports.login = async (req, res) => {
    const data = await runQuery('select * from usertypes');
    if(data.error) Response.InternalServerError(res, data.error); 
    else if(data.recordset.length === 0) Response.NotFound(res, "No data"); 
    else Response.Success(res, data.recordset); 
};

exports.signup = async (req, res) => {
  if (isEmpty(req.body)) {
    Response.BadRequest(res, "No data to post");
  } else {
    const result = await runSP("SIGN_UP");
    const data = await runQuery(
      NGOSignup(
        req.body,
        result.recordset[0].addressid,
        result.recordset[0].verificationid
      )
    );
    if (!data.error) Response.Success(res);
    else Response.InternalServerError(res, data.error, data.message);
  }
};
