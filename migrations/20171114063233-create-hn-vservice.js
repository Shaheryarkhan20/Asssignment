'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HnVservices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hotelName: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      id: {
        type: Sequelize.INTEGER
      },
      rent: {
        type: Sequelize.BIGINT
      },
      hotelType: {
        type: Sequelize.STRING
      },
      vehicleType: {
        type: Sequelize.STRING
      },
      vehicleNo: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('HnVservices');
  }
};