

'use strict';

const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Schools', [
      {
        id: uuidv4(),
        school_name: 'Katombela School',
        school_email: 'myschool.luanda@example.com',
        school_type: 'University',
        province: 'Luanda',
        founded_year: 2006,
        founder: 'Joao Katombela',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        school_name: 'Mario Kenzo School',
        school_email: 'kenzo.luanda@example.com',
        school_type: 'University',
        province: 'Luanda',
        founded_year: 2000,
        founder: 'Mario Kenzo',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Schools', null, {});
  }
};
