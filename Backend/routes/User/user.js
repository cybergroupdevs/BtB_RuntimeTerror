const express = require("express");
const router = express.Router();

const {
  updateDetails,
  offeredHelp,
  offeringHelp,
  profileDetails,
  verifyNGO,
  deleteUser,
  raiseRescueRequest
} = require("../../controller/user/user");
const { authUser, authAdmin, currentUer } = require("../../middleware/auth");

router.put("/user/updatedetails/:userid", currentUer, updateDetails);

router.get("/user/offeredhelp/:userid", currentUer, offeredHelp);

router.post("/user/offeringhelp/:userid", currentUer, offeringHelp);

router.get("/user/profiledetails/:userid", currentUer, profileDetails);

router.put("/user/:userid/verify/:ngoid", authAdmin, verifyNGO);

router.post("/raise/rescue/request", raiseRescueRequest);

router.delete("/user/:email", currentUer, deleteUser);

module.exports = router;
