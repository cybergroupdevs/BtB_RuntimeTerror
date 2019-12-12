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
  getVerificationDetails,
  verifyNGO,
  deleteUser,
  raiseRescueRequest
} = require("../../common/queries");

// updating user's profile details
exports.updateDetails = async (req, res) => {
  if (isEmpty(req.body)) {
    Response.BadRequest(res, "No data to post");
  } else {
    let id = req.params.userid;

    // executing query to get Address id and verification id of Users
    let data = await runQuery(getUserAddressAndVerificationIds(id));
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

    // creating query for update Users
    const query =
      (userTable ? userTable : " ") +
      (verificationTable ? verificationTable : " ") +
      (addressTable ? addressTable : " ");

    // executing query to update Users details
    let result = await runQuery(query);
    if (result.error) Response.InternalServerError(res, result.error);
    else if (result.rowsAffected.length === 0)
      Response.NotFound(res, "No data Updated");
    else Response.Success(res);
  }
};

// returns list of helps offered by users
exports.offeredHelp = async (req, res) => {
  let id = req.params.userid;

  // executing query to get offered helps
  const data = await runQuery(userOfferedHelps(id));
  if (data.error) Response.InternalServerError(res, data.error);
  else if (data.recordset.length === 0)
    Response.NotFound(res, "No help offered yet");
  else Response.Success(res, data.recordset);
};

// register private properties (Helps)
exports.offeringHelp = async (req, res) => {
  let id = req.params.userid;

  // executing query to get user details
  const checkUserIsVerified = await runQuery(getUserDetails(id));
  if (checkUserIsVerified.error)
    Response.InternalServerError(res, checkUserIsVerified.error);
  else if (checkUserIsVerified.recordset[0].isVerifiedUser) {
    if (isEmpty(req.body)) Response.BadRequest(res, "No data to register help");
    else {
      req.body.UserId = id;
      req.body.isActive = 1;
      req.body.AccomodationType = 'Private'
      if (req.body.AddressDetailId) {

        // executing query to register help
        let data = await runQuery(insertHelp(req.body));
        if (!data.error) Response.Success(res);
        else Response.InternalServerError(res, data.error);
      } else {
        if (req.body.AddressDetail) {
          req.body.AddressDetail.isAddressVerified = 0;

          // executing query to insert new address
          let result = await runQuery(insertNewAddress(req.body.AddressDetail));
          let id = result.recordset[0].id;
          delete req.body.AddressDetail;
          req.body.AddressDetailId = id;

          // executing query to register help
          let data = await runQuery(insertHelp(req.body));
          if (!data.error) Response.Success(res, "Success with new Address");
          else Response.InternalServerError(res, data.error);
        } else {

          // executing query to register help
          let data = await runQuery(insertHelp(req.body));
          if (!data.error) Response.Success(res);
          else Response.InternalServerError(res, data.error);
        }
      }
    }
  } else Response.AccessDenied(res, "CAN'T OFFER HELP USER NOT VERIFIED")
};

// returns the profile details of user
exports.profileDetails = async (req, res) => {
  let id = req.params.userid;

  // executing query to get user details
  const userDetails = await runQuery(getUserDetails(id));
  if (userDetails.error) Response.InternalServerError(res, userDetails.error);
  else {
    let addressId = userDetails.recordset[0].AddressDetailId;
    let verificationId = userDetails.recordset[0].VerificationDetailId;

    // executing query to get address details of user
    const addressDetails = await runQuery(getAddressDetails(addressId));

    // executing query to get verification details of users
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

// verify NGO by user(admin) 
exports.verifyNGO = async (req, res) => {
  let ngoId = req.params.ngoid;
  let userId = req.params.userid;

  // executing query to get user details
  const user = await runQuery(getUserDetails(userId));
  if (user.error) Response.InternalServerError(res, user.error);
  else if (user.recordset.length === 0)
    Response.NotFound(res, "User Not Found");
  else if (
    user.recordset[0].UserTypeId === 1 ||
    user.recordset[0].UserTypeId === 2
  ) {

    // executing query to verify NGO
    const verify = await runQuery(verifyNGO(ngoId, user.recordset[0].UserName));
    if (verify.error) Response.InternalServerError(res, verify.error);
    else if (verify.rowsAffected[0] === 0)
      Response.NotFound(res, "No NGO found");
    else Response.Success(res);
  } else {
    Response.AccessDenied(res, "User Not Authorized to verify NGO");
  }
};

// delete user
exports.deleteUser = async (req, res) => {
  let email = req.params.email;

  // executing query to delete  user
  const data = await runQuery(deleteUser(email))
  if(data.error) Response.InternalServerError(res, data.error);
  else Response.Success(res)
}

// register rescue request
exports.raiseRescueRequest = async (req, res) => {
  req.body.isActive = 1;

  // executing query for registering rescue request 
  const data = await runQuery(raiseRescueRequest(req.body))
  if(data.error) Response.InternalServerError(res, data.error)
  else Response.Success(res)
}
