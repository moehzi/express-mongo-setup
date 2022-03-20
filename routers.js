const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
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

router.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id))
      return res.send({ message: 'User tidak ditemukan' });

    const user = await User.findOne({ _id: id });

    if (user) {
      res.send({ message: 'Berhasil', data: user });
    }
  } catch (err) {
    res.send({ message: err.message || 'Internal Server Errror' });
  }
});

router.post('/users', async (req, res) => {
  const { name, age, status } = req.body;
  const user = await User.create({
    name,
    age,
    status,
  });

  res.send({ data: user, message: 'Berhasil' });
});

module.exports = router;
