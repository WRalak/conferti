const Guest = require('../models/guestModels');

// Service to create a new guest
exports.createGuest = async (guestData) => {
  const guest = new Guest(guestData);
  return await guest.save();
};

// Service to fetch all guests
exports.getAllGuests = async () => {
  return await Guest.find();
};
