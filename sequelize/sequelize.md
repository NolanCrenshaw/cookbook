### Steps to Setup Sequelize Project

##### initialize npm
        $ npm init -y

##### install sequelize package
        $ npm install sequelize@^5.0.0

##### install sequelize command line package
        $ npm install sequelize-cli@^5.0.0

##### install postgres package
        $ npm install pg@^8.0.0

##### initialize sequelize-cli structure
        $ npx sequelize-cli init

---------

##### use psql to create postgres user for project
        $ psql
        ~># CREATE USER username WITH PASSWORD 'password' CREATEDB;

##### alter config/config.json to correct settings
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

##### create the database
        $ npx sequelize-cli db:create


### Setup is now Complete

---------
---------

### Migration

##### build model & migration files
        $ npx sequelize-cli model:generate \
        --name Cats \
        --attributes "name:string age:integer"

*modify your migration file to adjust column attributes as needed \
*once migration file is setup properly, then migrate:*

##### run any new migration files (specifically the up methods)
        $ npx sequelize-cli db:migrate

*table now exists on database*

##### HOW TO: roll back a migration (specifically calls the down methods) !!! avoid doing this
        $ npx sequelize-cli db:migrate:undo

---------

### Seeding

##### create a seeder file
        $ npx sequelize-cli seed:generate --name default-cats

##### use bulkInsert() in seeder file to push data into table
        return queryInterface.bulkInsert('Cats', [
          { name: 'Sammy', age: 5, createdAt: new Date(), updatedAt: new Date() },
          { ..etc }
        ]);

##### run npx command to seed all
        $ npx sequelize-cli db:seed:all

----------

