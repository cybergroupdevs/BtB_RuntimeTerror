const express = require("express");
const router = express.Router();

const {updateDetails} = require("../../controller/user/user");

router.put("/user/updatedetails", updateDetails);

module.exports = router;
