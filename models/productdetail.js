
'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductDetail = sequelize.define('ProductDetail', {
    catagoryId: DataTypes.STRING,
    productName: DataTypes.STRING,
    content: DataTypes.STRING,
    benefit: DataTypes.STRING,
    recommendMenu: DataTypes.STRING,
    codeLng: DataTypes.STRING
  }, {});
  ProductDetail.associate = function (models) {
    // associations can be defined here
    ProductDetail.hasMany(models.category, {
      foreignKey: 'catagoryId',///
      sourceKey: 'catagoryId',
      onDelete: 'CASCADE',
    })
  };
  return ProductDetail;
};
