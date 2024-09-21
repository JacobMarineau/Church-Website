// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const eventRoutes = require("./routes/events");

app.use(cors());
app.use(express.json()); // Parse incoming JSON data

// Event routes
app.use("/api", eventRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
