const isEmpty = require("lodash.isempty");
const { runQuery } = require("../../common/function");
const Response = require("../../common/response");
const {
  listNGO,
  updateNGODetails,
  updateAddressDetails,
  updateVerificationDetails,
  getNGOAddressAndVerificationIds,
  listOfferedHelps
} = require("../../common/queries");

exports.updateDetails = async (req, res) => {
  if (isEmpty(req.body)) {
    Response.BadRequest(res, "No data to post");
  } else {
    let id = req.params.userid;
    let data = await runQuery(getNGOAddressAndVerificationIds(id));
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
        userTable = updateNGODetails(req.body.userdetails, id);
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

exports.listNGO = async (req, res) => {
  let data = await runQuery(listNGO);
  if (data.error) Response.InternalServerError(res, data.error);
  else if (data.recordset.length === 0) Response.NotFound(res, "No NGOs");
  else Response.Success(res, data.recordset);
};

exports.offeredHelps = async (req, res) => {
  const data = await runQuery(listOfferedHelps);
  if (data.error) Response.InternalServerError(res, data.error);
  else if (data.recordset.length === 0)
    Response.NotFound(res, "No Private properties");
  else Response.Success(res, data.recordset);
};
