const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/users/:id', (req, res) => {
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

app.post('/users', (req, res) => {
  console.log('post');
  res.send('Got a POST request');
});

app.put('/users', (req, res) => {
  res.send('Got a PUT request at /user');
});

app.delete('/users', (req, res) => {
  res.send('Got a Delete request at /user');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
