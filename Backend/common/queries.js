const { getColumnsAndValues, getSetCondition } = require("./function");

exports.userSignup = (data, addressid, verificationid) => {
  const reqData = getColumnsAndValues(data)
  const columns = reqData.columns + ",AddressDetailId, VerificationDetailId";
  const values = reqData.Values + "," + addressid + "," + verificationid;
  return `insert into Users(${columns}) values(${values})`;
};

exports.NGOSignup = data => {
  const reqData = getColumnsAndValues(data);
  const columns = reqData.columns + ",AddressDetailId, VerificationDetailId";
  const values = reqData.Values + "," + addressid + "," + verificationid;
  return `insert into authorities(${columns}) values(${values})`;
};

exports.updateUserDetails = (data, id) => {
  const setCondition = getSetCondition(data);
  return ` update users set ${setCondition} where id = ${id} `;
};

exports.updateAddressDetails = (data, id) => {
  const setCondition = getSetCondition(data);
  return ` update addressdetails set ${setCondition} where id = ${id} `;
};

exports.updateVerificationDetails = (data, id) => {
  const setCondition = getSetCondition(data);
  return ` update VerificationDetails set ${setCondition} where id = ${id} `;
};

exports.getUserAddressAndVerificationIds = (id) => {
  return `select AddressDetailId, VerificationDetailId from users where id = ${id}`;
}

// exports.raiseRescueRequest = (data) => {
//     const reqData = getColumnsAndValues(data);
//     return `insert into RescueDetails(${reqData.columns}) values(${reqData.Values})`;
// };

// exports.getRequestList = (data) => {
//     return `select * from RescueDetails where isActive = 1`;
// };
