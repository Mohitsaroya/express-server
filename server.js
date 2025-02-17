const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors()); // Allow all origins (for development)

// Middleware for handling requests
app.use(express.json());
const locationRoute = require('./routes/locationRoute');

// Listen for unhandled promise rejections and throw an error to ensure they are caught during development.
process.on('unhandledRejection', (error) => {
  throw error;
});

// Listen for uncaught exceptions and log the error details.
process.on('uncaughtException', (error) => {
  console.log(error);
});

// Sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/locations', locationRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
