const express = require("express");
const app = express();

app.set("json spaces", 1);

const db = require("./config/db");

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/suppliers", require("./routes/suppliers"));

app.get("/", (req, res) => res.send("It Works"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on http://localhost:${PORT}`));
