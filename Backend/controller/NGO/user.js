const isEmpty = require("lodash.isempty");
const { runQuery } = require("../../common/function");
const Response = require("../../common/response");
const {
  listNGO,
  updateNGODetails,
  updateAddressDetails,
  updateVerificationDetails,
  getNGOAddressAndVerificationIds,
  listPrivateProperties,
  listGovtShelters,
  getNGODetails,
  getAddressDetails,
  getVerificationDetails,
  verifyUser,
  insertHelp,
  insertNewAddress,
  deleteNGO,
  getUnverifiedUser,
  rescueRequestList
} = require("../../common/queries");

// update helping authorities(NGO) profile details
exports.updateDetails = async (req, res) => {
  if (isEmpty(req.body)) {
    Response.BadRequest(res, "No data to post");
  } else {
    let id = req.params.userid;

    // executing query to get Address id and verification id of helping authorities(NGO)
    let data = await runQuery(getNGOAddressAndVerificationIds(id));
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

      // creating query for update helping authorities(NGO)
      const query =
        (userTable ? userTable : " ") +
        (verificationTable ? verificationTable : " ") +
        (addressTable ? addressTable : " ");

      // executing query to update helping authorities(NGO) details
      let result = await runQuery(query);
      if (result.error) Response.InternalServerError(res, result.error);
      else if (result.rowsAffected.length === 0)
        Response.NotFound(res, "No data Updated");
      else Response.Success(res);
  }
};

// returns list of helping authorities(NGO)
exports.listNGO = async (req, res) => {

  // executing query to get list of helping authorities(NGO)
  let data = await runQuery(listNGO);
  if (data.error) Response.InternalServerError(res, data.error);
  else if (data.recordset.length === 0) Response.NotFound(res, "No NGOs");
  else Response.Success(res, data.recordset);
};

// returns list of Private Properties
exports.privateProperties = async (req, res) => {

  // executing query to get list of private properties registered for help
  const data = await runQuery(listPrivateProperties);
  if (data.error) Response.InternalServerError(res, data.error);
  else if (data.recordset.length === 0)
    Response.NotFound(res, "No Private properties");
  else Response.Success(res, data.recordset);
};

// returns list of Government Shelters
exports.govtShelters = async (req, res) => {

  // executing query to get list of registered government shelters
  const data = await runQuery(listGovtShelters);
  if (data.error) Response.InternalServerError(res, data.error);
  else if (data.recordset.length === 0)
    Response.NotFound(res, "No Private properties");
  else Response.Success(res, data.recordset);
};

// returns profile details of helping authorities(NGO)
exports.profileDetails = async (req, res) => {
  let id = req.params.userid;

  // executing query to get helping authorities(NGO) details
  const userDetails = await runQuery(getNGODetails(id));
  if (userDetails.error) Response.InternalServerError(res, userDetails.error);
  else {
    let addressId = userDetails.recordset[0].AddressDetailId;
    let verificationId = userDetails.recordset[0].VerificationDetailId;

    // executing query to get address details of helping authorities(NGO)
    const addressDetails = await runQuery(getAddressDetails(addressId));

    // executing query to get verification details of helping authorities(NGO)
    const verificationDetails = await runQuery(getVerificationDetails(verificationId));
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

// helping authorities(NGO) verifies the user
exports.verifyUser = async (req, res) => {
  let ngoId = req.params.ngoid;
  let userId = req.params.userid;

  // executing query to get helping authorities(NGO) details 
  const ngoDetails = await runQuery(getNGODetails(ngoId));
  if (ngoDetails.error) Response.InternalServerError(res, ngoDetails.error);
  else if (ngoDetails.recordset.length === 0)
    Response.NotFound(res, "No NGO Found");
  else {  

    // executing query to verify user
    const verify = await runQuery(verifyUser(userId, ngoDetails.recordset[0].AuthorityName));
    if (verify.error) Response.InternalServerError(res, verify.error);
    else if(verify.rowsAffected[0] === 0) Response.NotFound(res, "No user found")
    else Response.Success(res);
  }
}

// add government shelters
exports.addGovnShelter = async (req, res) => {
  let id = req.params.ngoid;

  // executing query to get details of helping authorities(NGO)
  const checkUserIsVerified = await runQuery(getNGODetails(id));
  if (checkUserIsVerified.error)
    Response.InternalServerError(res, checkUserIsVerified.error);
  else if (checkUserIsVerified.recordset.length === 0)
    Response.NotFound(res, "NGO Not Found");
  else if (checkUserIsVerified.recordset[0].isVerifiedUser) {
    if (isEmpty(req.body)) Response.BadRequest(res, "No data to register help");
    else {
      req.body.UserId = id;
      req.body.isActive = 1;
      req.body.AccomodationType = "Government_Shelters";
      if (req.body.AddressDetailId) {

        // executing query to register government shelters
        let data = await runQuery(insertHelp(req.body));
        if (!data.error) Response.Success(res);
        else Response.InternalServerError(res, data.error);
      } else {
        if (req.body.AddressDetail) {
          req.body.AddressDetail.isActive = 1;
          req.body.AddressDetail.isAddressVerified = 0;

          // executing query to insert new address
          let result = await runQuery(insertNewAddress(req.body.AddressDetail));
          let id = result.recordset[0].id;
          delete req.body.AddressDetail;
          req.body.AddressDetailId = id;

          // executing query to register government shelters
          let data = await runQuery(insertHelp(req.body));
          if (!data.error) Response.Success(res, "Success with new Address");
          else Response.InternalServerError(res, data.error);
        } else Response.NotFound(res, "Can't find the address");
      }
    }
  } else Response.AccessDenied(res, "CAN'T OFFER HELP NGO NOT VERIFIED");
};

// delete the helping authorities(NGO)
exports.deleteNGO = async (req, res) => {
  let email = req.params.email;

  // executing query to delete helping authority(NGO)
  const data = await runQuery(deleteNGO(email));
  if (data.error) Response.InternalServerError(res, data.error);
  else Response.Success(res);
}

// returns list of un-verified users
exports.unVerifiedUsers = async (req, res) => {

  // executing query to get list of un-verified users 
  const data = await runQuery(getUnverifiedUser)
  if(data.error) Response.InternalServerError(res, data.error)
  else Response.Success(res, data.recordset)
}

// returns list of rescue requests
exports.rescueRequestList = async (req, res) => {

  // executing query to get list of rescue requests(helps) 
  const data = await runQuery(rescueRequestList)
  if (data.error) Response.InternalServerError(res, data.error);
  else if (data.recordset.length === 0)
    Response.NotFound(res, "No Rescue Requests");
  else Response.Success(res, data.recordset);
};
