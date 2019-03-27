const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const auth = require("../auth");

const Supplier = require("../models/Supplier");

router.get("/", auth, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      Supplier.findAll()
        .then(suppliers => res.json(suppliers))
        .catch(err => res.send(err));
    }
  });
});

router.get("/:id", auth, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      Supplier.findByPk(req.params.id)
        .then(supplier => res.json(supplier))
        .catch(err => res.send(err));
    }
  });
});

router.post("/", auth, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      Supplier.create(req.body)
        .then(supplier => res.json(supplier.dataValues))
        .catch(err => res.send(err));
    }
  });
});

router.put("/:id", auth, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      Supplier.update(req.body, { where: { id: req.params.id } })
        .then(supplier => res.sendStatus(200))
        .catch(err => res.send(err));
    }
  });
});

router.delete("/:id", auth, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      Supplier.destroy({ where: { id: req.params.id } })
        .then(supplier => res.sendStatus(200))
        .catch(err => res.send(err));
    }
  });
});

module.exports = router;
