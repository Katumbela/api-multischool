'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('senha123', 10); // Hash da senha 'senha123'

    // Inserir usuários de exemplo
    await queryInterface.bulkInsert('Users', [
      {
        id: '1e5c68b0-9e6e-4c2c-8c17-6c5682f489a7',
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '31e7c7f4-51e7-45e6-b58f-1a0b1b15ac63',
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    // Remover todos os usuários inseridos pelo seed
    await queryInterface.bulkDelete('Users', null, {});
  }
};




