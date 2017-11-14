'use strict';
module.exports = (sequelize, DataTypes) => {
  var SuperAdmin = sequelize.define('SuperAdmin', {
    email: DataTypes.STRING,
    id: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return SuperAdmin;
};