const express = require('express');
const router = require('./routers');
const app = express();
const port = 3000;

const myLogger = (req, res, next) => {
  console.log('Logger');
  next();
};

app.use(myLogger);

app.use(router);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
