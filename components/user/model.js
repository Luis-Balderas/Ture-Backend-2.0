const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  DNI: { type: String, required: true },
  birth: { type: Date, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String, required: true },
});

const model = mongoose.model('User', mySchema);
module.exports = model;
