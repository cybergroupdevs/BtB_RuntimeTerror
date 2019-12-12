const express = require("express");
const router = express.Router();

const {
  updateDetails,
  listNGO,
  privateProperties,
  profileDetails,
  verifyUser,
  addGovnShelter,
  govtShelters,
  deleteNGO,
  unVerifiedUsers,
  rescueRequestList
} = require("../../controller/NGO/user");

// middle-wares
const { authNGO, currentNGO } = require("../../middleware/auth");

// route to update helping authority (NGO) profile details
router.put("/ngo/updatedetails/:userid", currentNGO, updateDetails);

// route to get list of helping authority (NGO)
router.get("/ngo/list", listNGO);

// route to get list of government shelters 
router.get("/government/shelters", govtShelters);

// route to get list of private properties (helps)
router.get("/private/properties", authNGO, privateProperties);

// route to get profile details of helping authority (NGO)
router.get("/ngo/profiledetails/:userid", currentNGO, profileDetails);

// route to verify user
router.put("/ngo/:ngoid/verify/:userid", authNGO, verifyUser);

// route to add government shelters
router.post("/ngo/government/shelters/:ngoid", addGovnShelter);

// route to delete helping authority (NGO)
router.delete("/ngo/:email", currentNGO, deleteNGO);

// route to get list of un-verified users
router.get("/unverifiedusers", authNGO, unVerifiedUsers);

// route to get list of rescue requests
router.get("/rescue/requests", authNGO, rescueRequestList)

module.exports = router;
