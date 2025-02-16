const express = require('express');
const router = new express.Router();
const locationController = require('../controllers/locationController');
const utilities = require('../utilities');

// this route will bring close locations to the user
router.get('/closelocations/', locationController.getLocations);

// This route will bring all locations
router.get('/alllocations/', locationController.getAllLocations);

// This route will add a new location
router.post('/location/', locationController.addLocation);

module.exports = router;
