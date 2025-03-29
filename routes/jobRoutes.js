const express = require("express");
const router = express.Router();
const JobApplication = require("../models/JobApplication");
const upload = require("../middleware/upload");

router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, phone, message, jobTitle } = req.body;
    const resumeUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const newApplication = new JobApplication({
      name,
      email,
      phone,
      message,
      jobTitle,
      resumeUrl,
    });

    await newApplication.save();
    res.status(201).json({ message: "Application submitted successfully!" });
  } catch (error) {
    console.error("Job application submission error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
