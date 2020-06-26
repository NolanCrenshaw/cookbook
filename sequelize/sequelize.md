**Steps to Setup Sequelize Project**
---------

# initialize npm
$ npm init -y

# install sequelize package
$ npm install sequelize@^5.0.0

# install sequelize command line package
$ npm install sequelize-cli@^5.0.0

# install postgres package
$ npm install pg@^8.0.0

# initialize sequelize-cli structure
$ npx sequelize-cli init

---------

# use psql to create postgres user for project
$ psql
~># CREATE USER username WITH PASSWORD 'password' CREATEDB;

# alter config/config.json to correct settings
{
  "development": {
    "username": "username",
    "password": "password,
    "database": "yourDBname_etc",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "seederStorage": "sequelize"
  }
}...

# create the database
$ npx sequelize-cli db:create


**Setup is now Complete**

---------
---------

**Migration and Building Content**
---------

# build model & migration files
$ npx sequelize model:generate \
--name Cats \
--attributes "name:string age:integer"

# modify your migration file to adjust column attributes as needed
# once migration file is setup properly, then migrate:

# run any new migration files (specifically the up methods)
$ npx sequelize db:migrate

# table now exists on database

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