const express = require("express");
const router = express.Router();

const { login, signupUser, signupNGO } = require("../controller/auth");

router.post("/login", login);

router.post("/ngo/signup", signupNGO);

router.post("/user/signup", signupUser);

module.exports = router;
