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

// returns token if successfully login, error if none
exports.login = async (req, res) => {
  if (isEmpty(req.body)) Response.BadRequest(res, "No data found in body");
  else {

    // executing query to get user details
    const user = await runQuery(getUserByEmail(req.body.Email));
    if (user.recordsets[1][0]) {
      checkPassword(req.body.Password, user.recordsets[1][0].Password)
        ? Response.Success(res, {"Token": getToken(user.recordsets[1][0])})
        : Response.AccessDenied(res, "Email password don't match");
    } else if (user.recordsets[0][0]) {
      checkPassword(req.body.Password, user.recordsets[0][0].Password)
        ? Response.Success(res, { Token: getToken(user.recordsets[0][0]) })
        : Response.AccessDenied(res, "Email password don't match");
    } else {
      Response.NotFound(res, "NO account with that email");
    }
  }
};

// register helping authority (NGO)
exports.signupNGO = async (req, res) => {
  if (isEmpty(req.body)) {
    Response.BadRequest(res);
  } else {
    // executing Stored procedure to register new address and verification entry and get those id's
    const result = await runSP("get_NewAddressid_Verificationid");
    req.body.AddressDetailId = result.recordset[0].addressid;
    req.body.VerificationDetailId = result.recordset[0].verificationid;

    // executing query to register helping authority (NGO)
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

// register User
exports.signupUser = async (req, res) => {
  if (isEmpty(req.body)) {
    Response.BadRequest(res, "No data to post");
  } else {
    // executing Stored procedure to register new address and verification entry and get those id's
    const result = await runSP("get_NewAddressid_Verificationid");
    req.body.AddressDetailId = result.recordset[0].addressid;
    req.body.VerificationDetailId = result.recordset[0].verificationid;

    // executing query to register User
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
