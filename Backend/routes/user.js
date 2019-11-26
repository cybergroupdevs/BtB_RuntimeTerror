const express = require('express');
const router = express.Router();

const {updatePersonalDetails, offerHelp, updateHelpDetails, listNGO } = require('../controller/user');

//lets user update personal details
router.put('/updatepersonaldetails', updatePersonalDetails);
//allow verfied users to raise help requests
router.post('/offerhelp', offerHelp);
//allow verified users to update help details
router.put('/updatehelpdetails', updateHelpDetails);
//let user find all the NGO around him/her
router.get('/listngo', listNGO);

module.exports = router;