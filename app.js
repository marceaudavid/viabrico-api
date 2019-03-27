const path = require("path");
const cors = require("cors");
const express = require("express");
const app = express();

const db = require("./config/db");

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

// Beautify Json
app.set("json spaces", 1);
// Set body-parsing for query string and json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Set CORS policy
app.use(cors());

// Handling routes
app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));
app.use("/suppliers", require("./routes/suppliers"));
app.use("/users", require("./routes/users"));

// Define the port and serve the API
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on http://localhost:${PORT}`));
