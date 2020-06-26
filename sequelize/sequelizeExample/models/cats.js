'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cats = sequelize.define('Cats', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  Cats.associate = function(models) {
    // associations can be defined here
    Cats.hasMany(models.Owners, { foreignKey: "cat_id", onDelete: "CASCADE", hooks: true })
  };
  return Cats;
};