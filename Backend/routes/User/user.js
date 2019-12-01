const express = require("express");
const router = express.Router();

const { updateDetails, offeredHelp, offeringHelp, profileDetails } = require("../../controller/user/user");

router.put("/user/updatedetails/:userid", updateDetails);

router.get("/user/offeredhelp/:userid", offeredHelp);

router.post("/user/offeringhelp/:userid", offeringHelp);

router.get("/user/profiledetails/:userid", profileDetails)

module.exports = router;
