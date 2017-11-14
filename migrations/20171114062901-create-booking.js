'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      place: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      id: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      noTickets: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      travelAgent: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('Bookings');
  }
};