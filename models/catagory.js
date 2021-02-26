'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    typeCatagoryS: DataTypes.STRING,
    catogoryName: DataTypes.STRING,
    codeLng: DataTypes.STRING,
    catagoryId: DataTypes.STRING
  }, {});
  category.associate = function(models) {
    // associations can be defined here
    
  };
  return category;
};
