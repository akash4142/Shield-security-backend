const express = require("express");
const JobApplication = require("../models/JobApplication");

const router = express.Router();

// Submit Job Application
router.post("/", async (req, res) => {
  try {
    const { name, email, resumeUrl } = req.body;
    const newApplication = new JobApplication({ name, email, resumeUrl });
    await newApplication.save();
    res.status(201).json({ message: "Application submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error submitting application" });
  }
});

module.exports = router;
