const isEmpty = require("lodash.isempty");
const { runQuery } = require("../../common/function");
const Response = require("../../common/response");
const {
  updateUserDetails,
  updateAddressDetails,
  updateVerificationDetails,
  getUserAddressAndVerificationIds,
  userOfferedHelps,
  insertHelp,
  insertNewAddress,
  getUserDetails,
  getAddressDetails,
  getVerificationDetails
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
      const query = userTable
        ? userTable
        : "" + addressTable
        ? addressTable
        : "" + verificationTable
        ? verificationTable
        : "";
      let result = await runQuery(query);
      if (result.error) Response.InternalServerError(res, result.error);
      else if (result.rowsAffected.length === 0)
        Response.NotFound(res, "No data Updated");
      else Response.Success(res);
    }
  }
};

exports.offeredHelp = async (req, res) => {
  let id = req.params.userid;
  const data = await runQuery(userOfferedHelps(id));
  if (data.error) Response.InternalServerError(res, data.error);
  else if (data.recordset.length === 0)
    Response.NotFound(res, "No help offered yet");
  else Response.Success(res, data.recordset);
};

exports.offeringHelp = async (req, res) => {
  if (isEmpty(req.body)) Response.BadRequest(res, "No data to register help");
  else {
    let id = req.params.userid;
    req.body.UserId = id;
    req.body.isActive = 1;
    if (req.body.AddressDetailId) {
      let data = await runQuery(insertHelp(req.body));
      if (!data.error) Response.Success(res);
      else Response.InternalServerError(res, data.error);
    } else {
      if (req.body.AddressDetail) {
        req.body.AddressDetail.isActive = 1;
        req.body.AddressDetail.isAddressVerified = 0;
        let result = await runQuery(insertNewAddress(req.body.AddressDetail));
        let id = result.recordset[0].id;
        delete req.body.AddressDetail;
        req.body.AddressDetailId = id;
        let data = await runQuery(insertHelp(req.body));
        if (!data.error) Response.Success(res, "Success with new Address");
        else Response.InternalServerError(res, data.error);
      } else {
        let data = await runQuery(insertHelp(req.body));
        if (!data.error) Response.Success(res);
        else Response.InternalServerError(res, data.error);
      }
    }
  }
};

exports.profileDetails = async (req, res) => {
  let id = req.params.userid;
  const userDetails = await runQuery(getUserDetails(id));
  if(userDetails.error) Response.InternalServerError(res, userDetails.error);
  else if(userDetails.recordset.length === 0) Response.NotFound(res, "No User Found")
  else {
    let addressId = userDetails.recordset[0].AddressDetailId;
    let verificationId = userDetails.recordset[0].VerificationDetailId;
    const addressDetails = await runQuery(getAddressDetails(addressId))
    const verificationDetails = await runQuery(getVerificationDetails(verificationId))
    if(addressDetails.error) Response.InternalServerError(res, addressDetails.error)
    else if(verificationDetails.error) Response.InternalServerError(res, verificationDetails.error)
    else if(addressDetails.recordset.length === 0) Response.NotFound(res, "No Address Found")
    else if(verificationDetails.recordset.length === 0) Response.NotFound(res, "No Verification Details Found")
    else {
      data = {
        "userDetails" : userDetails.recordset[0],
        "addressDetails" : addressDetails.recordset[0],
        "verificationDetails" : verificationDetails.recordset[0]
      }
      Response.Success(res, data)
    }
  }
}
