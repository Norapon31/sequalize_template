'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductUniq = sequelize.define('ProductUniq', {
    productID: DataTypes.STRING ,
    SKU: DataTypes.STRING,
    barCode: DataTypes.STRING,
    photoURL: DataTypes.STRING,
    link: DataTypes.STRING,
    discount: DataTypes.FLOAT,
    price: DataTypes.INTEGER,
    priceDiscount: DataTypes.FLOAT
  }, {});
  ProductUniq.associate = function(models) {
    // associations can be defined here
    ProductUniq.hasMany(models.ProductDetail, {
      foreignKey: 'productUniqId',
      sourceKey: 'productID',
      onDelete: 'CASCADE',
      as:'ProductRelationDetail',
    })
  };
  return ProductUniq;
};
