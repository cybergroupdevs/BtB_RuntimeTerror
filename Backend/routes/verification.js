const express = require('express');
const router = express.Router();

const {verifyUser, verifyNGO,verifyAuthority} = require('../controller/verification');

//verfy a user
router.post('user/verify', verifyUser);
//verfy an NGO
router.post('/verifyngo', verifyNGO);
//Verify a Public Authority
router.post('/verifyauthority', verifyAuthority);
//verfy an address
router.post('/verifyaddress', verifyAddress);

module.exports = router;