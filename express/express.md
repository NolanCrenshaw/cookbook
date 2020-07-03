# Express Language Guide
----------

### Express Setup

##### create project directory
        $ mkdir project-name
*Express sets requirements on project directory name. Best practice is lowercase with '-' or '_' characters between words.*

##### initialize npm
        $ npm init -y

##### install express package
        $ npm install express@^4.0.0
*Version 4.17.1 is what this guide will reference*
*the '^' character defaults to the latest v4*

##### install pug package
        $ npm install pug@^2.0.0

*At this point, it is best practice to setup a ".gitignore" file targeting "node_models/"*

##### create 'views' directory with .pug file to reference
        $ mkdir views
        $ touch views/index.pug

##### create 'app.js' file
        $ touch app.js

##### import 'express' library with 'require' in app.js 
        const express = require('express');

        const app = express();
*methods will now be called on the 'app' object to structure the web application*

##### apply .set method to establish view engine as pug
        app.set('view engine', 'pug');

----------

### Request Handling

*Reference the HTTP guide for URL syntax, methods, and controls*

##### Express built-in app.methods() for request handling
- app.get()  
- app.post()
- app.put()
- app.delete()

###### basic version of express request handling
        app.get('/', (req, res) => {
            res.send('Hello World!');
        });
*The first parameter of each method is the route path. It looks for a request match. On match the method runs.*

###### basic pug templated version of express request handling
        app.method('/', (req, res) => {
            res.render('index', {
                title: 'Welcome',
                heading: 'Home'
            });
        })

##### Regex in the route path
        app.get([/^\/(our-)?produ?ct{1,2}s?\/?$/i, '/productos'], (req, res) => {
            if (!req.path.toLowerCase().startsWith('/products')) {
                res.redirect('/products');
            }
            res.send('Products');
        });

*The route path can be inlaid with regex syntax to accommodate a range of match request beyond an exact one-to-one string comparision. An array may also be used so that Express checks each element of the array for a match to determine the request's URL path. The redirect method is then called to ensure that the actual pathname is specified by the browser on the response body.*

### Templating HTML with 'pug'







