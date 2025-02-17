const pool = require('../database');

const locationModel = {};

locationModel.getLocations = async (coordinates, radius = 1000) => {
  const { longitude, latitude } = coordinates;

  const query = `SELECT * FROM public_washrooms
    WHERE ST_DistanceSphere(
      ST_MakePoint(longitude, latitude),
      ST_MakePoint(${longitude}, ${latitude})
    ) <= ${radius}
  `;

  const locations = await pool
    .query(query)
    .then((res) => res.rows)
    .catch((err) => {
      throw new Error(err);
    });

  return locations;
};

locationModel.createLocation = async (location) => {
  const {
    location_name,
    address,
    description,
    accessibility_notes,
    hours_of_operation,
    seasonal_variability_hours,
    phone,
    web_link,
    longitude,
    latitude,
    status,
    reviews,
  } = location;

  const query = `
        INSERT INTO public_washrooms
        (location_name, address, description, accessibility_notes, hours_of_operation, seasonal_variability_hours, phone, web_link, latitude, longitude, status, reviews)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
        RETURNING *;
        `;

  const newLocation = await pool
    .query(query, [
      location_name,
      address,
      description,
      accessibility_notes,
      hours_of_operation,
      seasonal_variability_hours,
      phone,
      web_link,
      latitude,
      longitude,
      status,
      reviews,
    ])
    .then((res) => res.rows[0])
    .catch((err) => {
      throw new Error(err);
    });

  return newLocation;
};

locationModel.getAllLocations = async () => {
  const query = `SELECT * FROM public_washrooms`;

  const locations = await pool
    .query(query)
    .then((res) => res.rows)
    .catch((err) => {
      throw new Error(err);
    });

  return locations;
};

module.exports = locationModel;
