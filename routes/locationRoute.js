const express = require('express');
const router = new express.Router();
const locationController = require('../controllers/locationController');
const utilities = require('../utilities');

// this route will bring close locations to the user
router.get(
  '/closelocations/',
  utilities.handleErrors(locationController.getLocations)
);

// This route will bring all locations
router.get(
  '/alllocations/',
  utilities.handleErrors(locationController.getAllLocations)
);

// This route will add a new location
router.post(
  '/location/',
  utilities.handleErrors(locationController.createLocation)
);

module.exports = router;
