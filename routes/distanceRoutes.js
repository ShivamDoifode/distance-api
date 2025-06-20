const express = require('express');
const router = express.Router();
const { getDistance } = require('../controllers/distanceController');
const validateApiKey = require('../middlewares/validateApiKey');

router.post('/distance', validateApiKey, getDistance);

module.exports = router;
