const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const User = require("../models/User");

router.post("/", (req, res) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 10).then(hash => {
    User.create({ email, hash })
      .then(user => res.sendStatus(200))
      .catch(err => res.send(err));
  });
});

module.exports = router;
