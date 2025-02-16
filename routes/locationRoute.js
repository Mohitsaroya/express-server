const express = require('express');
const router = new express.Router();
const locationController = require('../controllers/locationController');
const utilities = require('../utilities');

router.get('/locations/:coordinates', locationController.getLocations);

router.post('/locations/', locationController.addLocation);

module.exports = router;
