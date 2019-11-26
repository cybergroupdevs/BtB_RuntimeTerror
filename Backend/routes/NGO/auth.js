const express = require('express');
const router = express.Router();

const {login, signup} = require('../../controller/NGO/auth');

//Verify User and UserType, grant AccessToken
router.post('/ngo/login', login);

//Allow visitors to Register as a User or Authority
router.post('/ngo/signup', signup);

module.exports = router;
