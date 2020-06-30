# Express Language Guide

### Express Setup

##### initialize npm
        $ npm init -y

##### install express package
        $ npm install express@^4.0.0
*version 4.17.1 is what this guide will reference*
*the '^' character defaults to the latest v4*

*at this point, it is best practice to setup a ".gitignore" file targeting "node_models/"*

##### create 'app.js' file
        $ touch app.js

##### import 'express' library with 'require' in app.js 
        const express = require('express');

        const app = express();