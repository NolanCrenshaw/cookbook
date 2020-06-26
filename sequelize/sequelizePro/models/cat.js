'use strict';

// export method
module.exports = (sequelize, DataTypes) => {
  
  // define Class object to return
  const Cat = sequelize.define('Cat', {
    // establish columns with types
    firstName: DataTypes.STRING,
    specialSkill: DataTypes.STRING
  }, {});

  // method to associate Class with FOREIGN KEYS
  Cat.associate = function(models) {
    // associations can be defined here
    
    // belongsTo() - establishes FOREIGN KEY association
    Cat.belongsTo(models.Recipe, { foreignKey: 'recipeId' });
    // hasMany() - establishes FOREIGN KEY association that will be applied multiple times
    Cat.hasMany(models.Recipe, { foreignKey: 'recipeId', onDelete: 'CASCADE', hooks: true });
  };
  
  return Cat;
};