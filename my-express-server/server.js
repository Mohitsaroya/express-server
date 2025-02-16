const express = require('express');
const app = express();
const { neonHandler } = require('neon-express');
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// This is the Neon handler for serverless functions
module.exports = neonHandler(app);
