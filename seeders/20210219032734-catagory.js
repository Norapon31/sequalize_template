'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('category', [{
      typeCatagoryS: 'Category_S_1',
      catogoryName:'ผักใบ',
      codeLng:'th',
      catagoryId:'CatID_1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      typeCatagoryS: 'Category_S_2',
      catogoryName:'เนื้อหมู',
      codeLng:'th',
      catagoryId:'CatID_2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      typeCatagoryS: 'Category_S_3',
      catogoryName:'ผลไม้สด',
      codeLng:'th',
      catagoryId:'CatID_3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      typeCatagoryS: 'Category_S_4',
      catogoryName:'ผลไม้สด',
      codeLng:'th',
      catagoryId:'CatID_4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      typeCatagoryS: 'Category_S_1',
      catogoryName:'Leafy vegetables',
      codeLng:'en',
      catagoryId:'CatID_1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      typeCatagoryS: 'Category_S_2',
      catogoryName:'Pork',
      codeLng:'en',
      catagoryId:'CatID_2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      typeCatagoryS: 'Category_S_3',
      catogoryName:'Fresh fruit',
      codeLng:'en',
      catagoryId:'CatID_3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      typeCatagoryS: 'Category_S_4',
      catogoryName:'Mushroom',
      codeLng:'en',
      catagoryId:'CatID_4',
      createdAt: new Date(),
      updatedAt: new Date()
    }
], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('category', null, {});
  }
};
