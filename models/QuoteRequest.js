const mongoose = require("mongoose");

const quoteRequestSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    phone: { type: String, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/.+\@.+\..+/, "Please enter a valid email address"],
    },
    city: { type: String, trim: true },
    reason: { type: String, required: true },
    frequency: { type: String },
    heardFrom: { type: String },
    message: { type: String, trim: true },
    submittedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

module.exports = mongoose.model("QuoteRequest", quoteRequestSchema);
