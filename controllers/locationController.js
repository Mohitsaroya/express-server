const locationModel = require('../models/locationModel');
const utilities = require('../utilities');

const locationController = {};

locationController.getLocations = async (req, res) => {
  const coordinates = {
    longitude: req.body.longitude,
    latitude: req.body.latitude,
  };
  const locations = await locationModel.getLocations(coordinates);
};

locationController.createLocation = async (req, res) => {
  const location = req.body;
  const newLocation = await locationModel.createLocation(location);
  res.json(newLocation);
};

locationController.getAllLocations = async (req, res) => {
  const locations = await locationModel.getAllLocations();
  res.json(locations);
};

module.exports = locationController;
