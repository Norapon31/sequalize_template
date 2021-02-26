'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProductDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      catagoryId: {
        type: Sequelize.STRING
      },
      productName: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING(1234)
      },
      benefit: {
        type: Sequelize.STRING(1234)
      },
      recommendMenu: {
        type: Sequelize.STRING(1234)
      },
      codeLng: {
        type: Sequelize.STRING
      },
      productUniqId:{
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ProductDetails');
  }
};
