const express = require('express');
const { createGuest, getAllGuests } = require("../controllers/guestContoller");

const router = express.Router();

router.post('/guests', createGuest); // POST /api/guests
router.get('/guests', getAllGuests); // GET /api/guests

module.exports = router;
