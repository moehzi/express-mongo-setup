const mongoose = require('mongoose');

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/db_latihan');
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('server database connect');
});
