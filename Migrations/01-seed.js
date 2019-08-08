var fs = require("fs")
var Sequelize = require("sequelize");

var sqlContents = "";

module.exports = {
  up: function (migration, DataTypes) {
      var baseSQL = fs.readFileSync("Migrations/seeds.sql", "UTF-8");
      console.log("sql contents" + baseSQL); // I recommend loading a file
      return migration.sequelize.query(baseSQL);
  } 
}

