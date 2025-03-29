const express = require("express");
const router = express.Router();
const QuoteRequest = require("../models/QuoteRequest");

// POST /api/quotes
router.post("/", async (req, res) => {
  
  try {
    console.log("Incoming data:", req.body);
    const {
      firstName,
      lastName,
      phone,
      email,
      city,
      reason,
      frequency,
      heardFrom,
      message,
    } = req.body;

    const newQuote = new QuoteRequest({
      firstName,
      lastName,
      phone,
      email,
      city,
      reason,
      frequency,
      heardFrom,
      message,
    });

    await newQuote.save();

    res.status(201).json({ message: "Quote request submitted successfully!" });
  } catch (error) {
    console.error("Error submitting quote:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
