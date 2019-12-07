const { verifyToken } = require("../common/function");
const Response = require("../common/response");

exports.authNGO = async (req, res, next) => {
  if (!req.header("Authorization"))
    Response.AccessDenied(res, "No Token Found");
  else {
    const token = req.header("Authorization").replace("Bearer ", "");
    const data = verifyToken(token);
    if (data.UserTypeId == 4) next();
    else Response.AccessDenied(res, "Not Authorized");
  }
};

exports.authAdmin = async (req, res, next) => {
  if (!req.header("Authorization"))
    Response.AccessDenied(res, "No Token Found");
  else {
    const token = req.header("Authorization").replace("Bearer ", "");
    const data = verifyToken(token);
    if (data.UserTypeId == 2) next();
    else Response.AccessDenied(res, "Not Authorized");
  }
};

exports.currentNGO = async (req, res, next) => {
  if (!req.header("Authorization"))
    Response.AccessDenied(res, "No Token Found");
  else {
    const token = req.header("Authorization").replace("Bearer ", "");
    const data = verifyToken(token);
    if (req.params.userid) {
      if (data.id == req.params.userid) next();
      else Response.AccessDenied(res, "Not  Authorized");
    }
    else if (req.params.email) {
      if (data.Email == req.params.email) next();
      else Response.AccessDenied(res, "Not  Authorized");
    } else Response.AccessDenied(res, "Not Authorized");
  }
};

exports.currentUser = async (req, res, next) => {
  if (!req.header("Authorization"))
    Response.AccessDenied(res, "No Token Found");
  else {
    const token = req.header("Authorization").replace("Bearer ", "");
    const data = verifyToken(token);
    if (req.params.userid) {
      if (data.id == req.params.userid) next();
      else Response.AccessDenied(res, "Not  Authorized");
    }
    else if (req.params.email) {
      if (data.email == req.params.Email) next();
      else Response.AccessDenied(res, "Not  Authorized");
    } else Response.AccessDenied(res, "Not Authorized");
  }
};
