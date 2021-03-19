"use strict";
module.exports = function (sequelize, DataTypes) {
  var Grade = sequelize.define("Grade", {
    value: DataTypes.STRING,
    scale: DataTypes.STRING,
    bonus: DataTypes.INTEGER,
  });
  return Grade;
};
