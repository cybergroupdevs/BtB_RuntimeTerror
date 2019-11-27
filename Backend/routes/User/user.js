const express = require("express");
const router = express.Router();

const { updateDetails, offeredhelps } = require("../../controller/user/user");

router.put("/user/updatedetails", updateDetails);

router.get("/user/offeredhelps/:userid", offeredhelps);

module.exports = router;
