const express = require("express");
const router = express.Router();

const Supplier = require("../models/Supplier");

router.get("/", (req, res) => {
  Supplier.findAll()
    .then(suppliers => res.json(suppliers))
    .catch(err => res.send(err));
});

router.get("/:id", (req, res) => {
  Supplier.findByPk(req.params.id)
    .then(supplier => res.json(supplier))
    .catch(err => res.send(err));
});

router.post("/", (req, res) => {
  Supplier.create(req.body)
    .then(supplier => res.json(supplier.dataValues))
    .catch(err => res.send(err));
});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
