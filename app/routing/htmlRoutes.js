const path = require("path");

//export HTML routes
module.exports = function (app) {
    //set up html route
    //home page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html" ));
    });
    //survey
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

}

