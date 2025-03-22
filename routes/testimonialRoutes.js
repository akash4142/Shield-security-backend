const express = require("express");
const Testimonial = require("../models/Testimonial");

const router = express.Router();

// Get Testimonials
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ error: "Error fetching testimonials" });
  }
});

module.exports = router;
