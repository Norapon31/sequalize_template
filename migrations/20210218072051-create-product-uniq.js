'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProductUniqs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productID: {
        type: Sequelize.STRING
      },
      SKU: {
        type: Sequelize.STRING
      },
      barCode: {
        type: Sequelize.STRING
      },
      photoURL: {
        type: Sequelize.STRING(1234)
      },
      link: {
        type: Sequelize.STRING(1234)
      },
      discount: {
        type: Sequelize.FLOAT
      },
      price: {
        type: Sequelize.INTEGER
      },
      priceDiscount: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('ProductUniqs');
  }
};
