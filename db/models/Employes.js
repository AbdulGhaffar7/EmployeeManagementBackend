"use strict";
module.exports = function (sequelize, DataTypes) {
  var Employee = sequelize.define("Employee", {
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    salery: DataTypes.STRING,
    joiningDate: DataTypes.DATE,
    profileImage: DataTypes.STRING,
    attendance: DataTypes.STRING,
  });
  return Employee;
};
