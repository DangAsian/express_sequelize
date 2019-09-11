const express = require("express");
const router = express.Router();
const db = require("../config/database");
const User = db.import("../models/user");
//
//Get a user
router.get("/", (req, res) => {
  User.findAll()
    .then(users => {
      res.send(users[0].createdAt);
    })
    .catch(err => console.log(err));
});

router.get("/add", (req, res) => {
  data = {
    f_name: "Dan",
    l_name: "Ang",
    email: "dan.justin.ang@gmail.com"
  };

  User.create(data);

  console.log(data);
});

module.exports = router;
