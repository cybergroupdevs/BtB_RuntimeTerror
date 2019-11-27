const { getColumnsAndValues, getSetCondition } = require("./function");

exports.userSignup = (data, addressid, verificationid) => {
  const reqData = getColumnsAndValues(data);
  const columns = reqData.columns + ",AddressDetailId, VerificationDetailId,isActive,isVerifiedUser";
  const values = reqData.Values + "," + addressid + "," + verificationid + ",1,0";
  console.log(values)
  return `insert into Users(${columns}) values(${values})`;
};

exports.NGOSignup = (data, addressid, verificationid) => {
  const reqData = getColumnsAndValues(data);
  const columns = reqData.columns + ",AddressDetailId, VerificationDetailId,isActive,isVerifiedUser";
  const values = reqData.Values + "," + addressid + "," + verificationid + ",1,0";
  return `insert into authorities(${columns}) values(${values})`;
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

// exports.raiseRescueRequest = (data) => {
//     const reqData = getColumnsAndValues(data);
//     return `insert into RescueDetails(${reqData.columns}) values(${reqData.Values})`;
// };

// exports.getRequestList = (data) => {
//     return `select * from RescueDetails where isActive = 1`;
// };
