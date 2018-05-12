// Dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.port || 8080;

// Create application/json parser
var jsonParser = bodyParser.json()

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


// Parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json'}))

// Parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}))

// Parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

