const express = require("express");
const router = express.Router();
const QuoteRequest = require("../models/QuoteRequest");

// POST /api/quotes
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    const newQuote = new QuoteRequest({ name, email, phone, service, message });
    await newQuote.save();

    res.status(201).json({ message: "Quote request submitted successfully!" });
  } catch (error) {
    console.error("Error submitting quote:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
