const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require("../models/User");

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
      res.sendStatus(404);
    }
  });
});

module.exports = router;
