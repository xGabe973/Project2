// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Dependencies
// =============================================================
var Guest = require("../../models/guest.js");
var sequelize = require("../../config/connection.js");
var Sequelize = require("sequelize");
// Routes
// =============================================================
module.exports = function(app) {
  app.get("/api/guest", function(req, res) {
    Guest.findAll({}).then(function(results) {
      res.json(results);
    });
  });
  //Get all Shelters
  app.get("/api/shelters", function(req, res) {
    var dbQuery = "SELECT * FROM shelters";

    sequelize
      .query(dbQuery, { type: Sequelize.QueryTypes.Select })
      .then(function(result) {
        console.log("Show results");
        console.log(result);
        res.json(result[0]);
      })
      .catch(function(err) {
        console.log(err);
      });
  });
  app.post("/api/guest", function(req, result) {
    console.log("Guest Data:");
    console.log(req.body);
    Guest.create({
      name: req.body.name,
      age: req.body.age,
      sex: req.body.sex,
      shelter: req.body.shelter,
      date: req.body.date
    }).then(function(result) {
      // `results` here would be the newly created guest
      res.json(result);
    });
  });
};
