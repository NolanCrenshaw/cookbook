'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cats = sequelize.define('Cats', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  Cats.associate = function(models) {
    // associations can be defined here
  };
  return Cats;
};