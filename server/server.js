const express = require('express');
const cors = require('cors');
const routes = require('./routes.js');
require('dotenv').config();
require('./dbConnection.js');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
