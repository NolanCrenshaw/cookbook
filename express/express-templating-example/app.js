/* 
    Express Templating Example
        - v^4.0.0
        - most recent update 6/30/20
        - rendering pug file title= Welcome, heading= Home
*/

// -------------

// require express package
const express = require('express');

// declare package object
const app = express();

// establish view engine as pug
app.set('view engine', 'pug');

// this example declares route accepting all request methods
app.all('*', (req, res) => {
    console.log(`Request method: ${req.method}`);
    console.log(`Request path: ${req.path}`);

    // renders referenced pug file with included declared element variables
    res.render('layout', { title: 'Welcome', heading: 'Home' });
});

const port = 8081;

app.listen(port, () => console.log(`Listening on port ${port}...`));