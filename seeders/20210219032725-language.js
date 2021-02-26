'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('languages', [{
      languageId: 'th',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      languageId: 'en',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('languages', null, {});
  }
};
