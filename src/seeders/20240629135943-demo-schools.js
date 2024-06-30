

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
        html_link: 'https://api-multischool.up.railway.app/api/schools',
        nif_number: '0062353BA0444',
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
        html_link: 'https://api-multischool.up.railway.app/api/schools',
        nif_number: '0682353LA044',
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
