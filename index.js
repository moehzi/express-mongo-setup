const express = require('express');
const router = require('./routers');
const app = express();
const port = 3000;

app.use(router);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
