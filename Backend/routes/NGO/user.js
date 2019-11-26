const express = require("express");
const router = express.Router();

const { updateDetails } = require("../../controller/NGO/user");

router.put("/ngo/updatedetails", updateDetails);

module.exports = router;
