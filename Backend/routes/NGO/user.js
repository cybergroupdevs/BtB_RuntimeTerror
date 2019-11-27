const express = require("express");
const router = express.Router();

const { updateDetails, listNGO } = require("../../controller/NGO/user");

router.put("/ngo/updatedetails", updateDetails);

router.get("/ngo/list", listNGO);

module.exports = router;
