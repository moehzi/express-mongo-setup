const mongoose = require('mongoose');

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

module.exports = User;
