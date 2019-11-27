const { getColumnsAndValues, getSetCondition } = require("./function");

exports.userSignup = (data) => {
  const reqData = getColumnsAndValues(data);
  return ` insert into Users(${reqData.columns}) values(${reqData.Values}) `;
};

exports.NGOSignup = (data) => {
  const reqData = getColumnsAndValues(data);
  return ` insert into authorities(${reqData.columns}) values(${reqData.Values}) `;
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

exports.deleteAddressId = addressid => {
  return ` delete from addressdetails where Id=${addressid} `;
};

exports.deleteverificationid = verificationid => {
  return ` delete from VerificationDetails where Id=${verificationid} `;
};

exports.raiseRescueRequest = data => {
  const reqData = getColumnsAndValues(data);
  return `insert into RescueDetails(${reqData.columns}) values(${reqData.Values})`;
};

exports.getUserByEmail = email => {
  return `select id, UserTypeId, Password, AddressDetailId, VerificationDetailId from Users where Email = '${email}' 
          select id, UserTypeId, Password, AddressDetailId, VerificationDetailId from authorities where Email = '${email}'`;
};

exports.listOfferedHelps = `select * from helps`;

exports.userOfferedHelps = id => {
  return `select * from helps where UserId = ${id}`;
};

exports.insertHelp = data => {
  const reqData = getColumnsAndValues(data);
  return `insert into helps(${reqData.columns}) values(${reqData.Values})`;
};

exports.insertNewAddress = data => {
  const reqData = getColumnsAndValues(data);
  return `insert into addressdetails(${reqData.columns}) values(${reqData.Values}) select SCOPE_IDENTITY() as id`;
};

