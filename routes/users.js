const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const auth = require("../auth");
const verifyId = require("../utils/validators");

const User = require("../models/User");

// Get all users and return them
router.get("/", auth, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      User.findAll()
        .then(suppliers => res.json(suppliers))
        .catch(() => res.sendStatus(400));
    }
  });
});

// Get one user by his id and return it
router.get("/:id", auth, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      verifyId(Users, req.params.id)
        .then(isValid => {
          if (isValid) {
            return Users.findByPk(req.params.id);
          } else {
            res.sendStatus(404);
          }
        })
        .then(supplier => res.json(supplier))
        .catch(() => res.sendStatus(400));
    }
  });
});

module.exports = router;
