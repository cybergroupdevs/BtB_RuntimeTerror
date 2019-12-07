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
const { authUser, authAdmin, currentUser } = require("../../middleware/auth");

router.put("/user/updatedetails/:userid", currentUser, updateDetails);

router.get("/user/offeredhelp/:userid", currentUser, offeredHelp);

router.post("/user/offeringhelp/:userid", currentUser, offeringHelp);

router.get("/user/profiledetails/:userid", currentUser, profileDetails);

router.put("/user/:userid/verify/:ngoid", authAdmin, verifyNGO);

router.post("/rescue/request", raiseRescueRequest);

router.delete("/user/:email", currentUser, deleteUser);

module.exports = router;
