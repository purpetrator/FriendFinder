// Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// ===============================================================================
// LOAD DATA
// ===============================================================================

var friendsData = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests

  app.post("/api/friends", function(req, res) {
    // console.log(res);

    var newFriend = req.body;
    console.log("New friend: " + newFriend);
    // console.log(friendsData);

    // This loop is comparing the survey answers with the existing friends and calculating a match score
    var difference = function(a, b) {
      return Math.abs(a - b);
    };

    var matchScore;
    var bestMatchScore = 50000;
    var bestMatchIndex;

    for (var i = 0; i < friendsData.length; i++) {
      matchScore = 0;
      for (var j = 0; j < newFriend.scores.length; j++) {
        matchScore += difference(friendsData[i].scores[j], newFriend.scores[j]);
        console.log(friendsData[i].scores[j]);
        console.log(newFriend.scores[j]);
        console.log("match score " + matchScore);
      }
      console.log("FINALSCORE: " + matchScore);
    }

    // check

    if (matchScore <= bestMatchScore) {
      bestMatchScore = matchScore;
      bestMatchIndex = i;
    }

    console.log("best match score: " + bestMatchScore);
    console.log("best match index: " + bestMatchIndex);

    friendsData.push(req.body);
    res.json("placeholder");
  });
};
