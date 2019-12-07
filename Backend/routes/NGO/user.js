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
const { authNGO, currentNGO } = require("../../middleware/auth");

router.put("/ngo/updatedetails/:userid", currentNGO, updateDetails);

router.get("/ngo/list", listNGO);

router.get("/government/shelters", govtShelters);

router.get("/private/properties", authNGO, privateProperties);

router.get("/ngo/profiledetails/:userid", currentNGO, profileDetails);

router.put("/ngo/:ngoid/verify/:userid", authNGO, verifyUser);

router.post("/ngo/government/shelters/:ngoid", addGovnShelter);

router.delete("/ngo/:email", currentNGO, deleteNGO);

router.get("/unverifiedusers", authNGO, unVerifiedUsers);

router.get("/rescue/requests", rescueRequestList)

module.exports = router;
