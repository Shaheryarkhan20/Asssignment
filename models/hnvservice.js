'use strict';
module.exports = (sequelize, DataTypes) => {
  var HnVservice = sequelize.define('HnVservice', {
    hotelName: DataTypes.TEXT,
    description: DataTypes.TEXT,
    id: DataTypes.INTEGER,
    rent: DataTypes.BIGINT,
    hotelType: DataTypes.STRING,
    vehicleType: DataTypes.STRING,
    vehicleNo: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return HnVservice;
};