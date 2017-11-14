'use strict';
module.exports = (sequelize, DataTypes) => {
  var Booking = sequelize.define('Booking', {
    place: DataTypes.TEXT,
    description: DataTypes.TEXT,
    id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    noTickets: DataTypes.INTEGER,
    type: DataTypes.STRING,
    travelAgent: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Booking;
};