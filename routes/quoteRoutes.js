// routes/quoteRoutes.js
const express = require("express");
const router = express.Router();
const QuoteRequest = require("../models/QuoteRequest");
const sendQuoteEmail = require("../routes/sendEmail");


// POST /api/quotes
router.post("/", async (req, res) => {
  try {
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

    // Basic validation (optional but good practice)
    if (!firstName || !lastName || !email || !reason) {
      return res.status(400).json({ error: "Missing required fields." });
    }

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

    await sendQuoteEmail(req.body);
    return res
      .status(201)
      .json({ message: "Quote request submitted successfully!" });
  } catch (error) {
    console.error("❌ Error submitting quote:", error.message);
    return res.status(500).json({
      error: "An internal server error occurred. Please try again later.",
    });
  }
});

module.exports = router;
