const isEmpty = require("lodash.isempty");
const { runQuery } = require("../../common/function");
const Response = require("../../common/response");
const {
  listNGO,
  updateNGODetails,
  updateAddressDetails,
  updateVerificationDetails,
  getNGOAddressAndVerificationIds,
  listOfferedHelps,
  getNGODetails,
  getAddressDetails,
  getVerificationDetails,
  verifyUser
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

exports.profileDetails = async (req, res) => {
  let id = req.params.userid;
  const userDetails = await runQuery(getNGODetails(id));
  if (userDetails.error) Response.InternalServerError(res, userDetails.error);
  else if (userDetails.recordset.length === 0)
    Response.NotFound(res, "No NGO Found");
  else {
    let addressId = userDetails.recordset[0].AddressDetailId;
    let verificationId = userDetails.recordset[0].VerificationDetailId;
    const addressDetails = await runQuery(getAddressDetails(addressId));
    const verificationDetails = await runQuery(
      getVerificationDetails(verificationId)
    );
    if (addressDetails.error)
      Response.InternalServerError(res, addressDetails.error);
    else if (verificationDetails.error)
      Response.InternalServerError(res, verificationDetails.error);
    else if (addressDetails.recordset.length === 0)
      Response.NotFound(res, "No Address Found");
    else if (verificationDetails.recordset.length === 0)
      Response.NotFound(res, "No Verification Details Found");
    else {
      data = {
        userDetails: userDetails.recordset[0],
        addressDetails: addressDetails.recordset[0],
        verificationDetails: verificationDetails.recordset[0]
      };
      Response.Success(res, data);
    }
  }
};

exports.verifyUser = async (req, res) => {
  let ngoId = req.params.ngoid;
  let userId = req.params.userid;
  const ngoDetails = await runQuery(getNGODetails(ngoId));
  if (ngoDetails.error) Response.InternalServerError(res, ngoDetails.error);
  else if (ngoDetails.recordset.length === 0)
    Response.NotFound(res, "No NGO Found");
  else {  
    const verify = await runQuery(verifyUser(userId, ngoDetails.recordset[0].AuthorityName));
    if (verify.error) Response.InternalServerError(res, verify.error);
    else if(verify.rowsAffected[0] === 0) Response.NotFound(res, "No user found")
    else Response.Success(res);
  }
  
}
