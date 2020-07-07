'use strict';
module.exports = (sequelize, DataTypes) => {
  const HairColor = sequelize.define('HairColor', {
    color: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    timestamps: false
  });
  HairColor.associate = function(models) {
    HairColor.hasMany(models.Person, { foreignKey : 'hairColorId' });
  };
  return HairColor;
};