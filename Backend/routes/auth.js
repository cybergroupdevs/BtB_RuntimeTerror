const express = require('express');
const router = express.Router();

const {login, signup, forgotPassword, changePassword, verifyPhone, verifyEmail} = require('../controller/auth');

//Verify User and UserType, grant AccessToken
router.post('/login', login);
//Allow visitors to Register as a User or Authority
router.post('/signup', signup);
//Allow users to send a reset password link mail
router.post('/forgotpassword', forgotPassword);
//Verify User and UserType, grant AccessToken
router.post('/changepassword', changePassword);
//Verify Phone
router.post('/verifyphone', verifyPhone);
//Verify Email Address
router.post('/verifyemail', verifyEmail);

module.exports = router;