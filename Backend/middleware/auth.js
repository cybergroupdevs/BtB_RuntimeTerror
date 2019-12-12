const { verifyToken } = require("../common/function");
const Response = require("../common/response");

// middle-ware to check user is NGO or not
exports.authNGO = async (req, res, next) => {
  if (!req.header("Authorization"))
    Response.AccessDenied(res, "No Token Found");
  else {
    const token = req.header("Authorization").replace("Bearer ", "");
    const data = verifyToken(token);
    if(data.error) Response.BadRequest(res, data.error)
    else if (data.UserTypeId == 4) next();
    else Response.AccessDenied(res, "Not Authorized");
  }
};

// middle-ware to check user is admin or not
exports.authAdmin = async (req, res, next) => {
  if (!req.header("Authorization"))
    Response.AccessDenied(res, "No Token Found");
  else {
    const token = req.header("Authorization").replace("Bearer ", "");
    const data = verifyToken(token);
    if (data.error) Response.BadRequest(res, data.error);
    else if (data.UserTypeId == 2) next();
    else Response.AccessDenied(res, "Not Authorized");
  }
};

// middle-ware to check user is valid
exports.currentNGO = async (req, res, next) => {
  if (!req.header("Authorization"))
    Response.AccessDenied(res, "No Token Found");
  else {
    const token = req.header("Authorization").replace("Bearer ", "");
    const data = verifyToken(token);
    if (data.error) Response.BadRequest(res, data.error);
    else if (req.params.userid) {
      if (data.id == req.params.userid) next();
      else Response.AccessDenied(res, "Not  Authorized");
    }
    else if (req.params.email) {
      if (data.Email == req.params.email) next();
      else Response.AccessDenied(res, "Not  Authorized");
    }
  }
};

// middle-ware to check NGo is valid
exports.currentUser = async (req, res, next) => {
  if (!req.header("Authorization"))
    Response.AccessDenied(res, "No Token Found");
  else {
    const token = req.header("Authorization").replace("Bearer ", "");
    const data = verifyToken(token);
    if (data.error) Response.BadRequest(res, data.error);
    else if (req.params.userid) {
      if (data.id == req.params.userid) next();
      else Response.AccessDenied(res, "Not Authorized");
    }
    else if (req.params.email) {
      if (data.Email === req.params.email) next();
      else Response.AccessDenied(res, "Not Authorized");
    }
  }
};
