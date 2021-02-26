'use strict';
module.exports = (sequelize, DataTypes) => {
  const language = sequelize.define('language', {
    languageId: DataTypes.STRING
  }, {});

  language.associate = function(models) {
    // associations can be defined here
    language.hasMany(models.ProductDetail, {
      foreignKey: 'codeLng',///
      sourceKey: 'languageId',
      onDelete: 'CASCADE',
      as:'productdetailList'
    })

    language.hasMany(models.category, {
      foreignKey: 'codeLng',///
      sourceKey: 'languageId',
      onDelete: 'CASCADE',
      as:'catogoryList',
   
    
  })
};
  return language;
};
