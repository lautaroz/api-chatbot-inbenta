require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
const index = require('./components/auth/router');
app.use('/', index);

module.exports = app;
