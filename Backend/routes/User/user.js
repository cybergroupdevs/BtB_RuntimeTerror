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

// middle-wares
const { authUser, authAdmin, currentUser } = require("../../middleware/auth");

// route to update profile details of users
router.put("/user/updatedetails/:userid", currentUser, updateDetails);

// route to get offered helps
router.get("/user/offeredhelp/:userid", currentUser, offeredHelp);

// route to register help (private properties) 
router.post("/user/offeringhelp/:userid", currentUser, offeringHelp);

// route to get profile details of users
router.get("/user/profiledetails/:userid", currentUser, profileDetails);

// route to verify NGO by admin 
router.put("/user/:userid/verify/:ngoid", authAdmin, verifyNGO);

// route to register rescue request
router.post("/rescue/request", raiseRescueRequest);

// route to delete user
router.delete("/user/:email", currentUser, deleteUser);

module.exports = router;
