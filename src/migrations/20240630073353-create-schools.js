'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schools', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      school_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      school_email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      founder: {
        type: Sequelize.STRING,
        allowNull: false
      },
      school_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      founded_year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      province: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nif_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      html_link: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Schools');
  }
};
