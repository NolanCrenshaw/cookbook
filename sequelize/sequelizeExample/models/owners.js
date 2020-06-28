'use strict';
module.exports = (sequelize, DataTypes) => {
  const Owners = sequelize.define('Owners', {
    name: DataTypes.STRING,
    cat_id: DataTypes.INTEGER
  }, {});
  Owners.associate = function(models) {
    // associations can be defined here
    Owners.hasMany(models.Cats, { foreignKey: 'cat_id' });
  };
  return Owners;
};