const Sequelize = require("sequelize");
const db = require("../config/database");

const Gig = db.define(
  "gig",
  {
    // attributes
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING
      // allowNull defaults to true
    },
    budget: {
      type: Sequelize.STRING
      // allowNull defaults to true
    },
    email: {
      type: Sequelize.STRING
      // allowNull defaults to true
    },
    price: {
      type: Sequelize.STRING
      // allowNull defaults to true
    }
  },
  {
    // options
  }
);

// Gig.sync();
// Gig.sync({ force: true }).then(() => {
//   // Now the `users` table in the database corresponds to the model definition
//   return Gig.create({
//     firstName: "John",
//     lastName: "Hancock"
//   });
// });

module.exports = Gig;
