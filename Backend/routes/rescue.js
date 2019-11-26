const express = require('express');
const router = express.Router();

const {raiseRescueRequest, getRequestList, cancelRescue, updateRequest, rescueCompleted} = require('../controller/rescue');

//create new rescue req.
router.post('/rescue', raiseRescueRequest);
//get rescue lists
router.get('/rescue', getRequestList);
//delete rescue request
router.delete('/rescue', cancelRescue);
//update rescue status
router.put('/rescue', updateRequest);
//update rescue status and feedback
router.put('/rescuecompleted', rescueCompleted);

module.exports = router;