const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");
const User = require("../models/User");
const Booking = require("../models/Booking");

router.post("/movies", async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(200).json(movie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/bookings", async (req, res) => {
  try {
    const { userId, movieId } = req.body;
    const userExists = await User.findById(userId);
    const movieExists = await Movie.findById(movieId);

    if (!userExists || !movieExists) {
      return res.status(400).json({ error: "Invalid userId or movieId" });
    }

    const booking = await Booking.create(req.body);
    res.status(200).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
