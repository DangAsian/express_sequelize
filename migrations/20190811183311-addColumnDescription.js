"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.renameColumn("Users", "firstName", "f_name"),
      queryInterface.renameColumn("Users", "lastName", "l_name")
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.renameColumn("Users", "f_name", "firstName"),
      queryInterface.renameColumn("Users", "l_name", "lastName")
    ]);
  }
};
