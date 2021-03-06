let friendsArr = require("../data/friends");

//export api route
module.exports = function (app) {
    // return all friends found in peopleArr via API
    app.get("/api/friends", function (req, res) {
        return res.json(friendsArr);
    });

    app.post("/api/friends", function (req, res) {
        let newUser = req.body;

        // console.log(newUser)

        // create variable to hold index for potential best friend and differences in score
        let totalDiffArr = [];
        let index;
        //loop through all friends in the friendArr
        for (i = 0; i < friendsArr.length; i++) {
            let diffArr = []
            //loop through all score of each friend
            for (j = 0; j < friendsArr[i].scores.length; j++) {
                //create variable to store difference between new user and any of the current friend in the array
                quesDiff = Math.abs(newUser.scores[j] - friendsArr[i].scores[j]);
                //push the quesDiff in diffArr
                diffArr.push(quesDiff);
            }
            // console.log(difference);
            // calculate totalDiff
            let totalDiff = diffArr.reduce(add, 0);
            function add(a, b) {
                return a + b
            }
            add(totalDiff)
            // console.log(totalDiff);

            //push totalDiff from each friend to the total Diff Array
            totalDiffArr.push(totalDiff);
            // console.log(totalDiffArr);
            
            //identify the lowest difference among all totalDiif
            let minDiff = Math.min.apply(null, totalDiffArr);
            // console.log(minDiff)
            //identify the index of the minDiff
            index = totalDiffArr.indexOf(minDiff)
            // console.log(index)
        }

        // push new user into the new friends Array
        friendsArr.push(newUser);
        
        res.json(friendsArr[index])
        
        console.log("your new best friend is: " + friendsArr[index].name);
        
    })

}
