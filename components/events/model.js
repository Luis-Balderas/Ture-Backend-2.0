const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  images: { type: [String], required: true },
  ocupation: { type: Number, required: true },
  housingId: { type: Schema.Types.ObjectId, ref: 'Housing' },
});

const model = mongoose.model('Event', mySchema);
module.exports = model;
