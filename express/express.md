# Basic Express Setup Guide

### Moving Parts:
1. Node Packages
2. Javascript Scripts
3. Database Installation
4. Rendering Elements
---------
### Creating the Project Directory and Installing Packages

Building an Express App begins with a clean directory to establish the project in. Create a new directory, initialize git and npm, and install all the required packages. Development packages are installed with a '--save-dev' tag. Here is an example of a basic setup.
```js
  "dependencies": {
    "body-parser": "^1.19.0",
    "cookie-parser": "^1.4.5",
    "csurf": "^1.11.0",
    "express": "^4.17.1",
    "pg": "^8.3.0",
    "pug": "^2.0.4",
    "sequelize": "^5.22.3",
    "sequelize-cli": "^5.5.1"
  },
  "devDependencies": {
    "morgan": "^1.10.0",
    "nodemon": "^2.0.4"
  }
```

```
$ mkdir project-name
$ cd project-name
$ git init
$ npm init -y
$ npm install express@^4.0.0 pug@^2.0.0 
$ npm install csurf@^1.0.0 cookie-parser@^1.0.0 body-parser@^1.0.0
$ npm install sequelize@^5.0.0 sequelize-cli@^5.0.0 pg@^8.0.0
$ npm install nodemon@^2.0.0 morgan --save-dev
```
A variety of subdirectories may be required depending upon the project, but for this example we will only be created a 'views' subdir for our pug files. We will create a '.gitignore' file, adding in our node_modules/ and any other sensitive or unnecessary files or directories. We will also create a javascript file named 'app.js' that will serve as the central logic script for our project.
```
$ mkdir views
$ touch .gitignore
$ touch app.js
```
---------
### Constructing the 'app.js' file:

##### Require statements:
The first lines of the 'app.js' file import necessary packages with 'require' statements.
```js
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const csurf = require('csurf');
```
Next comes any local imported objects. We haven't setup our database yet, but we can assign the require here anyway.
```js
const { HairColor, Person } = require('./models');
```
##### Variable Declaration:
This is followed by defining required variables.
```js
const app = express();
const port = 8081;
const csrfProtection = csurf({ cookie : true });
```
##### Global Application Method Calls:
The next commands call methods upon our core 'app' object made from an express call.
App.set() establishes that we will be using pug files.
```js
app.set('view engine', 'pug');
```
App.use() creates globally applied dependencies.
```js
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended : false }));
```
Finally, we can call App.listen() to get the server running.
```js
app.listen(port, () => {
    console.log(`Listening on port:${port}...`);
});
```
----------

### Setting Up and Deploying the Database

##### Creating a user and database:
Creating our user and database is most easily done in Postgres at the terminal.
```
$ psql
~# CREATE USER name_app WITH PASSWORD 'password' CREATEDB;
~# CREATE DATABASE db_name_development WITH OWNER name_app;
```
##### Sequelize Setup:
Initialize Sequelize from the command line.
```
$ npx sequelize init
```
Adjust the 'config.json' file in the newly created subdir 'config'. Here we're using the more fleshed out example's information. The final line regarding seederStorage is a replacement of the automatically populated line. Notice 'postgres' is declared here, while 'mysql' is the default value.
```js
{
  "development": {
    "username": "express_practice_app",
    "password": "EzB5Dxo2dabnQBF8",
    "database": "express_practice_development",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "seederStorage": "sequelize"
  },
  "test": {
    "username": "express_practice_app",
    "password": "EzB5Dxo2dabnQBF8",
    "database": "express_practice_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "seederStorage": "sequelize"
  },
  "production": {
    "username": "express_practice_app",
    "password": "EzB5Dxo2dabnQBF8",
    "database": "express_practice_production",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "seederStorage": "sequelize"
  }
}
```
##### Create Model and Migration Files:
Create the object files for both the application and database to use.
```
$ npx sequelize-cli model:generate \
--name Name \
--attributes "columnName:value"
```
##### Modify Migration and Model Files to Required Specifications:
The Model Files will be referenced by your application. The Migration files will be applied to the sequelize database. Adjust both files so that the values are set appropriately with 'allowNull' and 'unique' attributes, for example, being applied. Best practice is to give both files the same restriction, instead of relying on only one or the other. This is also where we make foreignKey connections between Tables. The Tables must be made in a logical order so that foreignKeys aren't referencing Tables not yet created.
> Examples of this code can be seen in the migration/ and models/ directories. *This portion of the markdown file will require future updating.*
##### Create Seeder Files:
Seed files may be created to populate the tables with initial data.
```
$ npx sequelize-cli seed:generate \
--name test-data-name
```
##### Modify Seeder Files with Data to Import:
The seeder file provides both an "up" and "down method that will be called by future sequelize-cli commands. The bulkInsert() and bulkDelete() methods are called to populate and delete the tables with the 'db:seed' commands.
```js
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('HairColors', [
          { columnName: value }
      ])
  }
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('People', null, {});
}
```
##### Migrate the Database and Seed the Tables:
```
$ npx sequelize-cli db:migrate
$ npx sequelize-cli db:seed:all
```
---------
### Routing the Application
##### Creating an AsyncHandler Function:
As we will be working with Promise accessing the database, it is best to create a handling function that we can call on each instance of our routing methods.
```js
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
```
##### Adding .get() and .post() methods in the 'app.js' file:
Returning to the 'app.js' file, we will make .get() and .post() calls on our App. These will target paths and render pointing at pug files we will soon make.
> Notice that we are applying our csrfProtection explicitly, as it was not assigned a global app.use() call.
```js
app.get('/new-person', csrfProtection, asyncHandler(async (req, res) => {
    const hairColors = await HairColor.findAll({ order: ['color'] });
    res.render('new-person-form', { hairColors, token: req.csrfToken() });
}));

app.post('/new-person', csrfProtection, asyncHandler(async (req, res) => {
    const { firstName, lastName, age, biography, hairColorId } = req.body;
    await Person.create({
        firstName,
        lastName,
        age,
        biography,
        hairColorId 
    })
    res.redirect('/');

}));

app.get('/', asyncHandler(async (req, res) => {
    const people = await Person.findAll({ include : HairColor });
    res.render('person-list', { people });
}));
```
> *This portion of the markdown file will need future updating.*
---------
### Rendering with .pug
##### Create .pug files in the views/ directory:
These are pointed to by the res.render() calls inside our routing from 'app.js'.
```pug
doctype html
html(lang="en")
    head
        meta(charset="UTF-8")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")
        title People
    body
        table
            thead
                tr
                    th First Name
                    th Last Name
                    th Age
                    th Biography
                    th Hair Color
            tbody
                each person in people
                    tr
                        td= person.firstName
                        td= person.lastName
                        td= person.age
                        td= person.biography
                        td= person.HairColor.color
```
> See 'views/new-person-form.pug' for the form template. *This portion of the markdown file will need to be updated.*

