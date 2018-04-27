const express = require("express");
const bodyParser = require("body-parser");
const app = require("express");
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
