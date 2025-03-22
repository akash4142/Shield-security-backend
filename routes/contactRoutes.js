const express = require("express");
const ContactMessage = require("../models/ContactMessage");

const router = express.Router();

// Submit Contact Form
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error submitting message" });
  }
});

module.exports = router;
