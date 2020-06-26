'use strict';
module.exports = (sequelize, DataTypes) => {
  const Owners = sequelize.define('Owners', {
    name: DataTypes.STRING,
    cat_id: DataTypes.INTEGER
  }, {});
  Owners.associate = function(models) {
    // associations can be defined here
    // Owners has a FOREIGN KEY pointing at the Cats Table
    // thus Owners has `belongTo` called on it to make the connection
    Owners.belongsTo(models.Cats, { foreignKey: 'cat_id' });
  };
  return Owners;
};