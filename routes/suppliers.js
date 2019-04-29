const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const auth = require("../auth");
const verifyId = require("../validators");

const Supplier = require("../models/Supplier");

// Get all suppliers and return them
router.get("/", auth, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      Supplier.findAll()
        .then(suppliers => res.json(suppliers))
        .catch(() => res.sendStatus(400));
    }
  });
});

// Get one supplier by his id and return it
router.get("/:id", auth, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      verifyId(Supplier, req.params.id)
        .then(isValid => {
          if (isValid) {
            return Supplier.findByPk(req.params.id);
          } else {
            res.sendStatus(404);
          }
        })
        .then(supplier => res.json(supplier))
        .catch(() => res.sendStatus(400));
    }
  });
});

// Create a new supplier and return it
router.post("/", auth, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      Supplier.create(req.body)
        .then(supplier => res.json(supplier.dataValues))
        .catch(() => res.sendStatus(400));
    }
  });
});

// Update an existing supplier
router.put("/:id", auth, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      verifyId(Supplier, req.params.id)
        .then(isValid => {
          if (isValid) {
            return Supplier.update(req.body, { where: { id: req.params.id } });
          } else {
            res.sendStatus(400);
          }
        })
        .then(() => res.send({ msg: `Supplier ${req.params.id} updated` }))
        .catch(() => res.sendStatus(400));
    }
  });
});

// Delete an existing supplier
router.delete("/:id", auth, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      verifyId(Supplier, req.params.id)
        .then(isValid => {
          if (isValid) {
            return Supplier.destroy({ where: { id: req.params.id } });
          } else {
            res.sendStatus(400);
          }
        })
        .then(() => res.send({ msg: `Supplier ${req.params.id} deleted` }))
        .catch(() => res.sendStatus(400));
    }
  });
});

module.exports = router;
