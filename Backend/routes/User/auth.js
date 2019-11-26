const express = require('express');
const router = express.Router();

const {login, signup} = require('../../controller/user/auth');

//Verify User and UserType, grant AccessToken
router.post('/user/login', login);

//Allow visitors to Register as a User or Authority
router.post('/user/signup', signup);

module.exports = router;