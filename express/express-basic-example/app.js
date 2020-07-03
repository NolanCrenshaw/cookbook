/* 
    Express Example App
        - v^4.0.0
        - most recent update 6/30/20
        - http://localhost:8081/ --> "Hello World"
*/

// -------------

// require express package
const express = require('express');

// declare package object
const app = express();

// define route declarations
app.get('/', (req, res) => {
    res.send('Hello World');
});

// declare port variable
const port = 8081;

// call app.method '.listen()' passing in port var and optional callback
app.listen(port, () => console.log(`Listening on port ${port}...`));

/*  
    Can now run file in terminal with 'node app.js'
    Port 8081 should be active, handling req/res
*/

// ----------------