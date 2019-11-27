const express = require("express");
const router = express.Router();

const { updateDetails, offeredHelps, offeringHelp } = require("../../controller/user/user");

router.put("/user/updatedetails/:userid", updateDetails);

router.get("/user/offeredhelps/:userid", offeredHelps);

router.post("/user/offeringhelp/:userid", offeringHelp);

module.exports = router;
