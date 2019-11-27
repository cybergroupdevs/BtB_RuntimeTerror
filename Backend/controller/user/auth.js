const isEmpty = require("lodash.isempty");
const { runQuery, runSP } = require("../../common/function");
const Response = require("../../common/response");
const { userSignup } = require("../../common/queries");

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
    else Response.InternalServerError(res, data.error, data.message);
  }
};
