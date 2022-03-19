const mongoose = require('mongoose');

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/db_latihan');
}

// Create schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive',
  },
});

// create model
const User = mongoose.model('User', userSchema);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
  //    Get all users
  const users = await User.find();
  console.log('get all: ', users);
  //   Get one user
  const findOneUser = await User.findOne({ _id: '6231a5de95b7795ddb2dc5c2' });
  console.log('get one: ', findOneUser);
  // create user
  const newUser = await User.create({
    name: 'Muh Nur Faizi',
    age: 25,
    status: 'active',
  });
  console.log(newUser);
  // U can also create user with this save method
  const newUser1 = new User();
  newUser1.name = 'faizigagahbanget';
  newUser1.age = 21;
  newUser1.status = 'active';
  const insertNewUser1 = await newUser1.save();
  console.log(insertNewUser1);

  // Update User
  const updateUser = await User.updateOne(
    { _id: '62357b8ae856773ebc9f662f' },
    { name: 'Muh Faizi' }
  );
  console.log(updateUser);
});
