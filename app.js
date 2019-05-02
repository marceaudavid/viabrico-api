const cors = require("cors");
const helmet = require("helmet");
const express = require("express");
const app = express();

const db = require("./config/db");

// Connect to the database
db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    db.sync({
      force: false
    });
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

// Beautify Json
app.set("json spaces", 1);
// Set body-parsing for query string and json body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Set CORS policy
app.use(cors());
app.use(helmet());

// Default message
app.get("/", (req, res) => res.send("Welcome !"));

// Handling routes
app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));
app.use("/suppliers", require("./routes/suppliers"));
app.use("/users", require("./routes/users"));

// Define the port and serve the API
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on http://localhost:${PORT}`));
