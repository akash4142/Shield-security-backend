require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// Import Routes
const jobRoutes = require("./routes/jobRoutes");
const contactRoutes = require("./routes/contactRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes");
const quoteRoutes = require("./routes/quoteRoutes")
const path  = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


app.use("/api/jobs", jobRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/quotes",quoteRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
