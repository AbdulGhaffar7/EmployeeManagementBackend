"use strict";
module.exports = function (sequelize, DataTypes) {
  var Department = sequelize.define("Department", {
    name: { type: DataTypes.STRING, allowNull: false },
    slug: { type: DataTypes.STRING, allowNull: false },
    work: { type: DataTypes.STRING, allowNull: false },
    location: { type: DataTypes.STRING, allowNull: false },
  });
  return Department;
};
