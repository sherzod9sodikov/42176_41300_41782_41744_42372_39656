const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const mainRouter = require("./routes/mainRouter");
const app = express();
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

mongoose.connection.on("disconnected", () => {
  console.warn("⚠️ MongoDB disconnected");
});

mongoose.connection.on("reconnected", () => {
  console.log("🔄 MongoDB reconnected");
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1", mainRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
