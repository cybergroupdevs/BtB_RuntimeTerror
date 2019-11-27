const express = require("express");
const router = express.Router();

const { updateDetails, listNGO, offeredhelps } = require("../../controller/NGO/user");

router.put("/ngo/updatedetails", updateDetails);

router.get("/ngo/list", listNGO);

router.get("/offeredhelps", offeredhelps);

module.exports = router;
