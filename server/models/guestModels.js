const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  idOrPassport: { type: String, required: true },
  phone: { type: String, required: true },
  residency: { type: String },
  vehicleDetails: { type: String },
  date: { type: String, required: true },
  time: { type: String, required: true },
});

module.exports = mongoose.model('Guest', guestSchema);
