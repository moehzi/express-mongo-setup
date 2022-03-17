const express = require('express');
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

router.post('/users', (req, res) => {
  console.log('post');
  res.send('Got a POST request');
});

router.put('/users', (req, res) => {
  res.send('Got a PUT request at /user');
});

router.delete('/users', (req, res) => {
  res.send('Got a Delete request at /user');
});

module.exports = router;
