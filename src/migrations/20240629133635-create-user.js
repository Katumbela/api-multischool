'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      adhesionNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      registrationNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      studentName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      class: {
        type: Sequelize.STRING,
        allowNull: false
      },
      shift: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      course: {
        type: Sequelize.STRING,
        allowNull: false
      },
      identificationNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      registrationYear: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      school: {
        type: Sequelize.STRING,
        allowNull: false
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Students');
  }
};
