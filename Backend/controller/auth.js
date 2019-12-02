const isEmpty = require("lodash.isempty");
const { runQuery, runSP, checkPassword, getToken } = require("../common/function");
const Response = require("../common/response");
const {
  userSignup,
  NGOSignup,
  deleteAddressId,
  deleteverificationid,
  getUserByEmail
} = require("../common/queries");

exports.login = async (req, res) => {
  if (isEmpty(req.body)) Response.BadRequest(res, "No data found in body");
  else {
    const user = await runQuery(getUserByEmail(req.body.Email));
    if (user.recordsets[1][0]) {
      checkPassword(req.body.password, user.recordsets[1][0].Password)
        ? Response.Success(res, {"Token": getToken(user.recordsets[1][0])})
        : Response.AccessDenied(res, "Email password don't match");
    } else if (user.recordsets[0][0]) {
      checkPassword(req.body.password, user.recordsets[1][0].Password)
        ? Response.Success(res, { Token: getToken(user.recordsets[0][0]) })
        : Response.AccessDenied(res, "Email password don't match");
    } else {
      Response.NotFound(res, "NO account with that email");
    }
  }
};

exports.signupNGO = async (req, res) => {
  if (isEmpty(req.body)) {
    Response.BadRequest(res, "No data to post");
  } else {
    const result = await runSP("get_NewAddressid_Verificationid");
    req.body.AddressDetailId = result.recordset[0].addressid;
    req.body.VerificationDetailId = result.recordset[0].verificationid;
    const data = await runQuery(NGOSignup(req.body));
    if (!data.error) Response.Success(res);
    else {
      let deleteQuery =
        deleteAddressId(result.recordset[0].addressid) +
        deleteverificationid(result.recordset[0].verificationid);
      let deleteIds = await runQuery(deleteQuery);
      if (deleteIds.rowsAffected)
        Response.InternalServerError(res, data.error, data.message);
      else
        Response.InternalServerError(
          res,
          deleteIds.error,
          "Extra entries goes in Address and verification"
        );
    }
  }
};

exports.signupUser = async (req, res) => {
  if (isEmpty(req.body)) {
    Response.BadRequest(res, "No data to post");
  } else {
    const result = await runSP("get_NewAddressid_Verificationid");
    req.body.AddressDetailId = result.recordset[0].addressid;
    req.body.VerificationDetailId = result.recordset[0].verificationid;
    const data = await runQuery(userSignup(req.body));
    if (!data.error) Response.Success(res);
    else {
      let deleteQuery =
        deleteAddressId(result.recordset[0].addressid) +
        deleteverificationid(result.recordset[0].verificationid);
      let deleteIds = await runQuery(deleteQuery);
      if (deleteIds.rowsAffected)
        Response.InternalServerError(res, data.error, data.message);
      else
        Response.InternalServerError(
          res,
          deleteIds.error,
          "Extra entries goes in Address and verification"
        );
    }
  }
};
