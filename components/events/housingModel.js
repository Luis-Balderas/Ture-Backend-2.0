const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  price: { type: Number, required: true },
  ocupation: { type: Number, required: true },
});

const model = mongoose.model('Housing', mySchema);
module.exports = model;
