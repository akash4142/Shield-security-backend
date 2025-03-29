const mongoose = require("mongoose");

const jobApplicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  jobTitle: String,
  resumeUrl: String,
  appliedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("JobApplication", jobApplicationSchema);
