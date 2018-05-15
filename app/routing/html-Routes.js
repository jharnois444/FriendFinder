var path = require('path');

module.exports = function (app) {

    // Pass in app from express, deliver survey.html when user hits /survey
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    // Create a route for homepage
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

    

}