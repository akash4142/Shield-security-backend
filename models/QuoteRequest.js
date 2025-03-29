const mongoose = require("mongoose");

const quoteRequestSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: String,
  email: { type: String, required: true },
  city: String,
  reason: { type: String, required: true },
  frequency: String,
  heardFrom: String,
  message: String,
  submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("QuoteRequest", quoteRequestSchema);