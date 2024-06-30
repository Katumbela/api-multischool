'use strict';

const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const students = [
      {
        adhesionNumber: '123456',
        registrationNumber: '20230001',
        studentName: 'John Doe',
        class: '10A',
        shift: 'Morning',
        phoneNumber: '1234567890',
        course: 'Science',
        identificationNumber: 'ABC123456',
        registrationYear: 2023,
        school: 'Katombela School',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        adhesionNumber: '654321',
        registrationNumber: '20230002',
        studentName: 'Jane Doe',
        class: '10B',
        shift: 'Afternoon',
        phoneNumber: '0987654321',
        course: 'Arts',
        identificationNumber: 'XYZ654321',
        registrationYear: 2023,
        school: 'Mario Kenzo School',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('Students', students, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Students', null, {});
  }
};
