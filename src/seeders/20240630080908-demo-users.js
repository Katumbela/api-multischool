'use strict';

const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const students = [
      {
        adhesionNumber: '123456',
        registrationNumber: '20230001',
        studentName: 'João Silva',
        class: '10A',
        shift: 'Manhã',
        phoneNumber: '1234567890',
        course: 'Ciências',
        identificationNumber: 'ABC123456',
        registrationYear: 2023,
        school: 'Escola Katombela',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        adhesionNumber: '654321',
        registrationNumber: '20230002',
        studentName: 'Maria Oliveira',
        class: '10B',
        shift: 'Tarde',
        phoneNumber: '0987654321',
        course: 'Artes',
        identificationNumber: 'XYZ654321',
        registrationYear: 2023,
        school: 'Escola Mário Kenzo',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('Students', students.map(student => ({
      ...student,
      password: bcrypt.hashSync('senha123', 10) // Adiciona a senha encriptada
    })), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Students', null, {});
  }
};
