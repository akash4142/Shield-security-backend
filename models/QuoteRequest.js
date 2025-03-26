const mongoose = require("mongoose");

const quoteRequestSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  service: String,
  message: String,
  submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("QuoteRequest", quoteRequestSchema);
