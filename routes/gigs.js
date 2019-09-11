const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Gig = require("../models/Gig");

router.get("/", (req, res) => {
  Gig.findAll()
    .then(gigs => {
      res.render("gigs", {
        gigs
      });
    })
    .catch(err => console.log(err));
});

// Add a gig
router.get("/add", (req, res) => {
  const data = {
    title: "Looking for something",
    technologies: "React",
    budget: "$3000",
    description: "Lorem Ipsum",
    email: "user1"
  };

  let { title, technologies, description, budget, email } = data;
  console.log(title);

  Gig.create({
    title,
    technologies,
    description,
    budget,
    email
  })
    .then(gig => res.redirect("/gigs"))
    .catch(err => console.log(err));
});

module.exports = router;
