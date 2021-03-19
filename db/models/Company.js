"use strict";
module.exports = function (sequelize, DataTypes) {
  var Company = sequelize.define("Company", {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    startedAt: DataTypes.DATE,
    logo: DataTypes.STRING,
  });
  return Company;
};
