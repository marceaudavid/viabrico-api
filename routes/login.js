const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require("../models/User");

// Check if a user exist, if is password match the hash and return him a token
router.post("/", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ where: { email } }).then(user => {
    if (user) {
      bcrypt.compare(password, user.hash).then(valid => {
        if (valid) {
          jwt.sign({ user }, "secretkey", { expiresIn: "1d" }, (err, token) => {
            if (err) {
              res.sendStatus(403);
            } else {
              res.json(token);
            }
          });
        } else {
          res.sendStatus(403);
        }
      });
    } else {
      res.status(404).json({ error: "User doesn't exists" });
    }
  });
});

module.exports = router;
