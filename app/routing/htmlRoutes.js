const path = require("path");

//export HTML routes
module.exports = function (app) {
    //set up html route
    //home page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
    });
    //survey
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "survey.html"));
    });

}

