// accessing environment variables
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const fs = require("fs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./routes/routes.js")(app, fs);

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  console.log(`Server started on ${port}...`)
);

module.exports = server;
