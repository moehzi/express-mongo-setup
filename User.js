const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Nama tidak boleh kosong'] },
  age: { type: Number, required: [true, 'Umur tidak boleh kosong'] },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive',
  },
});

// create model
const User = mongoose.model('User', userSchema);

module.exports = User;
