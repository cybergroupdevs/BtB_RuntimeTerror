const express = require("express");
const router = express.Router();

const { login, signupUser, signupNGO } = require("../controller/auth");

// route for login (users and helping authorities (NGO))
router.post("/login", login);

// route for sign-up helping authorities (NGO)
router.post("/ngo/signup", signupNGO);

// route for sign-up user
router.post("/user/signup", signupUser);

module.exports = router;
