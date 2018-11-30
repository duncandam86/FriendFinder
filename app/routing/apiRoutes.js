const peopleArr = require("../data/friends");

//export api route
module.exports = function (app) {
    // return all friends found in peopleArr via API
    app.get("/api/friends", function (req, res) {
        return res.json(peopleArr);
    });

}
