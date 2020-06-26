
const { sequelize, Cat } = require("./models");

async function main() {
  try {
    await sequelize.authenticate();
  } catch (e) {
    console.log("Database connection failure.");
    console.log(e);
    return;
  }

  console.log("Database connection success!");
  console.log("Sequelize is ready to use!");

  // establish Cat from import/require statement
  const cat = await Cat.findByPk(1);
  console.log(cat.toJSON());

  console.log(`${cat.firstName} has been assigned id #${cat.id}.`);
  console.log(`They are ${cat.age} years old.`);

  // Close database connection when done with it.
  await sequelize.close();
}

main();

async function main() {
  
  const cat = await Cat.findByPk(1);

  cat.firstName = "New Name";
  cat.age = 123;

  await cat.save();

  await sequelize.close();
}

main();