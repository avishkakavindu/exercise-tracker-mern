const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors);
app.use(express.json()); // allow to parse json data

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
