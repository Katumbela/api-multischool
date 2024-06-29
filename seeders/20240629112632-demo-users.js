'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'hashed_password', // Lembre-se de sempre hashear senhas antes de armazená-las
        school: 'Example School',
        age: 25,
        province: 'Example Province',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: 'hashed_password',
        school: 'Another School',
        age: 30,
        province: 'Another Province',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Adicione mais usuários conforme necessário
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
