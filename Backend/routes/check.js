const express = require('express');
const router = express.Router();
const {checkingApi, checkingPostApi} = require('../controller/check');

router.get('/', (req, res) => {
    res.send({"message" : "hello"});
});

router.get('/data', checkingApi);
router.post('/data', checkingPostApi);

module.exports = router;