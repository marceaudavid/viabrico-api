const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const User = require("../models/User");

router.post("/", (req, res) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 10).then(hash => {
    User.findOne({ where: { email } }).then(user => {
      if (user) {
        res.status(400).json({ error: "User already exists" });
      } else {
        User.create({ email, hash })
          .then(user => res.sendStatus(200))
          .catch(err => res.status(500).json({ error: "User can't be created, please retry later" }));
      }
    });
  });
});

module.exports = router;
