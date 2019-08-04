// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var Guest = sequelize.define("guest", {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER,
  sex: Sequelize.STRING,
  shelter: Sequelize.STRING,
  date: Sequelize.INTEGER
});

// Syncs with DB
Guest.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Guest;
