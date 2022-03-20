const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();
const connection = require('./connection.js');

require('./mongoose');

const User = require('./User');

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/users', async (req, res) => {
  try {
    const users = await User.find();

    res.send({ data: users });
  } catch (err) {
    res.send({ message: err.message || 'Internal Server Errror' });
  }
});

module.exports = router;
