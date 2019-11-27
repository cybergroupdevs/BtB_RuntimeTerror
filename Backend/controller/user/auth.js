const isEmpty = require("lodash.isempty");
const { runQuery, runSP } = require("../../common/function");
const Response = require("../../common/response");
const {
  userSignup,
  deleteAddressId,
  deleteverificationid
} = require("../../common/queries");

exports.login = async (req, res) => {
  res.send("not implemented");
};

exports.signup = async (req, res) => {
  if (isEmpty(req.body)) {
    Response.BadRequest(res, "No data to post");
  } else {
    const result = await runSP("SIGN_UP");
    const data = await runQuery(
      userSignup(
        req.body,
        result.recordset[0].addressid,
        result.recordset[0].verificationid
      )
    );
    if (!data.error) Response.Success(res);
    else {
      let deleteQuery =
        deleteAddressId(result.recordset[0].addressid) +
        deleteverificationid(result.recordset[0].verificationid);
      let deleteIds = await runQuery(deleteQuery);      
      if (deleteIds.rowsAffected)  Response.InternalServerError(res, data.error, data.message);
      else Response.InternalServerError(res, data.error, "Extra entries goes in Address and verfication");
    }
  }
};
