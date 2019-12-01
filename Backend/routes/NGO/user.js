const express = require("express");
const router = express.Router();

const { updateDetails, listNGO, offeredHelps, profileDetails, verifyUser } = require("../../controller/NGO/user");

router.put("/ngo/updatedetails/:userid", updateDetails);

router.get("/ngo/list", listNGO);

router.get("/offeredhelps", offeredHelps);

router.get("/ngo/profiledetails/:userid", profileDetails);

router.put("/ngo/:ngoid/verify/:userid", verifyUser);

module.exports = router;
