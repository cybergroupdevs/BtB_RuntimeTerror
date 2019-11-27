const { getColumnsAndValues, getSetCondition } = require("./function");

exports.userSignup = (data, addressid, verificationid) => {
  const reqData = getColumnsAndValues(data);
  const columns = reqData.columns + ",AddressDetailId, VerificationDetailId,isActive,isVerifiedUser";
  const values = reqData.Values + "," + addressid + "," + verificationid + ",1,0";
  return ` insert into Users(${columns}) values(${values}) `;
};

exports.NGOSignup = (data, addressid, verificationid) => {
  const reqData = getColumnsAndValues(data);
  const columns = reqData.columns + ",AddressDetailId, VerificationDetailId,isActive,isVerifiedUser";
  const values = reqData.Values + "," + addressid + "," + verificationid + ",1,0";
  return ` insert into authorities(${columns}) values(${values}) `;
};

exports.updateUserDetails = (data, id) => {
  const setCondition = getSetCondition(data);
  return ` update users set ${setCondition} where id = ${id} `;
};

exports.updateNGODetails = (data, id) => {
  const setCondition = getSetCondition(data);
  return ` update authorities set ${setCondition} where id = ${id} `;
};

exports.updateAddressDetails = (data, id) => {
  const setCondition = getSetCondition(data);
  return ` update addressdetails set ${setCondition} where id = ${id} `;
};

exports.updateVerificationDetails = (data, id) => {
  const setCondition = getSetCondition(data);
  return ` update VerificationDetails set ${setCondition} where id = ${id} `;
};

exports.getUserAddressAndVerificationIds = id => {
  return `select AddressDetailId, VerificationDetailId from users where id = ${id}`;
};

exports.getNGOAddressAndVerificationIds = id => {
  return `select AddressDetailId, VerificationDetailId from authorities where id = ${id}`;
};

exports.listNGO = `select * from authorities where UserTypeId = 4 and isActive = 1`;

exports.deleteAddressId = (addressid) => {
  return ` delete from addressdetails where Id=${addressid} `;
};

exports.deleteverificationid = (verificationid) => {
  return ` delete from VerificationDetails where Id=${verificationid} `;
};

exports.raiseRescueRequest = (data) => {
    const reqData = getColumnsAndValues(data);
    return `insert into RescueDetails(${reqData.columns}) values(${reqData.Values})`;
};

exports.getUserByEmail = (email) => {
  return `select id, UserTypeId, Password, AddressDetailId, VerificationDetailId from Users where Email = '${email}' 
          select id, UserTypeId, Password, AddressDetailId, VerificationDetailId from authorities where Email = '${email}'`;
}

exports.listofferedhelps = `select * from helps`;

exports.userOfferedHelps = id => {
  return `select * from helps where UserId = ${id}`;
};

// exports.getRequestList = (data) => {
//     return `select * from RescueDetails where isActive = 1`;
// };
