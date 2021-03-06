const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const auth = require("../auth");
const verifyId = require("../validators");

const User = require("../models/User");

// Get all users and return them
router.get("/", auth, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      User.findAll()
        .then(users => res.json(users))
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
      verifyId(User, req.params.id)
        .then(isValid => {
          if (isValid) {
            return User.findByPk(req.params.id);
          } else {
            res.sendStatus(404);
          }
        })
        .then(user => res.json(user))
        .catch(() => res.sendStatus(400));
    }
  });
});

// Delete an existing user
router.delete("/:id", auth, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      verifyId(User, req.params.id)
        .then(isValid => {
          if (isValid) {
            return User.destroy({ where: { id: req.params.id } });
          } else {
            res.sendStatus(400);
          }
        })
        .then(() => res.send({ msg: `User ${req.params.id} deleted` }))
        .catch(() => res.sendStatus(400));
    }
  });
});

module.exports = router;
