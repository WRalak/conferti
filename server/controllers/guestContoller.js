const guestService = require('../services/guestService');

// Controller to handle guest creation
exports.createGuest = async (req, res) => {
  try {
    const guest = await guestService.createGuest(req.body);
    res.status(201).json(guest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to fetch all guests
exports.getAllGuests = async (req, res) => {
  try {
    const guests = await guestService.getAllGuests();
    res.status(200).json(guests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
