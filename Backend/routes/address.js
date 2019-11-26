const express = require('express');
const router = express.Router();

const {verifyUser, verifyNGO,verifyAuthority} = require('../controller/verification');

//verfy a user
router.get('/getaddress', getAddress);
//verfy an NGO
router.post('/addaddress', addAddress);
//Verify a Public Authority
router.post('/updateaddress', updateAddress);
//Verify a Public Authority
router.delete('/updateaddress', updateAddress);

module.exports = router;