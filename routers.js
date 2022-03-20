const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();
const connection = require('./connection.js');
const User = require('./User');
require('mongoose');

router.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = router;
