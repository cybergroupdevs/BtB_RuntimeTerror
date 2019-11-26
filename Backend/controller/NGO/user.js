const { runQuery } = require("../../common/function");
const Response = require("../../common/response");
const isEmpty = require("lodash.isempty");
const {
  updateNGODetails,
  updateAddressDetails,
  updateVerificationDetails,
  getNGOAddressAndVerificationIds
} = require("../../common/queries");

exports.updateDetails = async (req, res) => {
  if (isEmpty(req.body)) {
    Response.BadRequest(res, "No data to post");
  } else {
    let data = await runQuery(getNGOAddressAndVerificationIds(req.body.id));
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
      userTable = updateNGODetails(req.body.userdetails, req.body.id);
    }
    const query = userTable + addressTable + verificationTable;
    let result = await runQuery(query);
    if (result.error) Response.InternalServerError(res, result.error);
    else if (result.rowsAffected.length === 0)
      Response.NotFound(res, "No data Updated");
    else Response.Success(res);
  }
};
