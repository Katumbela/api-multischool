'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const companies = [
      {
        companyName: 'Tech Innovators',
        foundedYear: 2010,
        category: 'Technology',
        founderName: 'Alice Smith',
        biography: 'Leading tech innovations.',
        contact: '123-456-7890',
        email: 'info@techinnovators.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyName: 'Green Energy Solutions',
        foundedYear: 2015,
        category: 'Energy',
        founderName: 'Bob Johnson',
        biography: 'Sustainable energy solutions.',
        contact: '987-654-3210',
        email: 'contact@greenenergy.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('Companies', companies, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Companies', null, {});
  }
};
