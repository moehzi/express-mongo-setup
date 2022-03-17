const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();
const connection = require('./connection.js');

router.get('/', (req, res) => {
  res.send('Hello World');
});
router.get('/users', async (req, res) => {
  try {
    const db = connection.db('db_latihan');
    const users = await db.collection('users').find().toArray();
    res.send({ data: users });
  } catch (err) {
    res.send({ message: err.message || 'internal server error' });
  }
});

router.get('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const users = [
    {
      id: 1,
      name: 'Faizi',
      age: 30,
    },
    {
      id: 2,
      name: 'Roland',
      age: 25,
    },
  ];
  if (id === 1) {
    res.send(users[0]);
  } else {
    res.send(users[1]);
  }
});

router.post('/users', async (req, res) => {
  try {
    const db = connection.db('db_latihan');
    const { name, age, status } = req.body;
    const users = await db.collection('users').insertOne({
      name,
      age,
      status,
    });

    res.send({ data: users, message: 'Berhasil ditambahkan' });
  } catch (err) {
    res.send({ message: err.message || 'internal server error' });
  }
});

router.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const db = connection.db('db_latihan');
    const { name, age, status } = req.body;
    const users = await db
      .collection('users')
      .updateOne({ _id: ObjectId(id) }, { $set: { name, age, status } });

    if (users.modifiedCount === 1) {
      return res.send({ data: users, message: 'berhasil diubah' });
    }
    return res.send({ message: 'gagal' });
  } catch (err) {
    res.send({ message: err.message || 'internal server error' });
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const db = connection.db('db_latihan');
    const users = await db.collection('users').deleteOne({ _id: ObjectId(id) });

    if (users.deletedCount === 1) {
      return res.send({ message: 'berhasil delete' });
    }
    return res.send({ message: 'gagal hapus' });
  } catch (err) {
    res.send({ message: err.message || 'internal server error' });
  }
});

module.exports = router;
