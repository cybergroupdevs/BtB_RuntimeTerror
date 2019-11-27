const isEmpty = require("lodash.isempty");
const { runQuery } = require("../../common/function");
const Response = require("../../common/response");
const {
  updateUserDetails,
  updateAddressDetails,
  updateVerificationDetails,
  getUserAddressAndVerificationIds,
  userOfferedHelps
} = require("../../common/queries");

exports.updateDetails = async (req, res) => {
  if (isEmpty(req.body)) {
    Response.BadRequest(res, "No data to post");
  } else {
    let id = req.params.userid;
    let data = await runQuery(getUserAddressAndVerificationIds(id));
    if (data.recordset.length === 0)
      Response.NotFound(res, "No Userid found to update");
    else {
      if (req.body.addressdetails) {
        addressTable = updateAddressDetails(
          req.body.addressdetails,
          data.recordset[0].AddressDetailId
        );
      }
      if (req.body.verificationdetails) {
        verificationTable = updateVerificationDetails(
          req.body.verificationdetails,
          data.recordset[0].VerificationDetailId
        );
      }
      if (req.body.userdetails) {
        userTable = updateUserDetails(req.body.userdetails, id);
      }
      const query = userTable?userTable:""+addressTable?addressTable:""+verificationTable?verificationTable:"";
      let result = await runQuery(query);
      if (result.error) Response.InternalServerError(res, result.error);
      else if (result.rowsAffected.length === 0)
        Response.NotFound(res, "No data Updated");
      else Response.Success(res);
    }
  }
};

exports.offeredhelps = async (req, res) => {
  let id = req.params.userid;
  const data = await runQuery(userOfferedHelps(id));
  if (data.error) Response.InternalServerError(res, data.error);
  else if (data.recordset.length === 0)
    Response.NotFound(res, "No help offered yet");
  else Response.Success(res, data.recordset);
};
