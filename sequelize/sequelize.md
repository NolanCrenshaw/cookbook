# install sequelize package
$ npm install sequelize@^5.0.0

# install sequelize command line package
$ npm install sequelize-cli@^5.0.0

# install postgres package
$ npm install pg@^8.0.0

---------
# build model & migration files
$ npx sequelize model:generate \
--name Cat \
--attributes "firstCol:type secondCol:string thirdCol:integer"

# run any new migration files (specifically the up methods)
$ npx sequelize db:migrate

# roll back a migration (specifically calls the down methods)
# !!! avoid doing this
$ npx sequelize db:migrate:undo



---------

# initilize sequelize framework -(starts as mysql / rework directories)
$ npx sequelize init

.
├── config
│   └── config.json
├── migrations
├── models
│   └── index.js
├── node_modules
├── package-lock.json
├── package.json
└── seeders

---------
# config/config.json
{
  "development": {
    "username": "catsdbuser",
    "password": "catsdbpassword",
    "database": "catsdb",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}...


---------
# ./index.js
const { sequelize } = require("./models");

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

  // Close database connection when done with it.
  await sequelize.close();
}

main();

// Prints:
//
// Executing (default): SELECT 1+1 AS result
// Database connection success!
// Sequelize is ready to use!