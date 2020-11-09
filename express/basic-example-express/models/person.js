'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
    },
    biography: {
      type: DataTypes.TEXT,
    },
    hairColorId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false
  });
  Person.associate = function(models) {
    Person.belongsTo(models.HairColor, { foreignKey : 'hairColorId' });
  };
  return Person;
};