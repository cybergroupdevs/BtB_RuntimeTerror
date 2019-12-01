const express = require("express");
const router = express.Router();

const { updateDetails, offeredHelp, offeringHelp, profileDetails, verifyNGO } = require("../../controller/user/user");

router.put("/user/updatedetails/:userid", updateDetails);

router.get("/user/offeredhelp/:userid", offeredHelp);

router.post("/user/offeringhelp/:userid", offeringHelp);

router.get("/user/profiledetails/:userid", profileDetails)

router.put("/user/:userid/verify/:ngoid", verifyNGO)

module.exports = router;
