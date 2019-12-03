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
  unVerifiedUsers
} = require("../../controller/NGO/user");

router.put("/ngo/updatedetails/:userid", updateDetails);

router.get("/ngo/list", listNGO);

router.get("/government/shelters", govtShelters);

router.get("/private/properties", privateProperties);

router.get("/ngo/profiledetails/:userid", profileDetails);

router.put("/ngo/:ngoid/verify/:userid", verifyUser);

router.post("/ngo/government/shelters/:ngoid", addGovnShelter);

router.delete("/ngo/:email", deleteNGO);

router.get("/unverifiedusers", unVerifiedUsers);

module.exports = router;
