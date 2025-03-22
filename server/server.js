const express = require('express');
const cors = require('cors');
const routes = require('./routes.js');
require('dotenv').config();
require('./dbConnection.js');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
const corsOption={
  origin:'https://menu-managing-site.vercel.app',
  method:"GET,HEAD,PUT,PATCH,DELETE,POST"
}
app.use(cors(corsOption));
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
