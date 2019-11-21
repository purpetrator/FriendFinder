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

    // var difference = function(a, b) {
    //   return Math.abs(a - b);
    // };

    // var matchScore = 0;

    // // var demoScores = [2, 2, 4, 3, 3, 3, 4, 5, 3, 3];
    // for (var i = 0; i < friendsData.length; i++) {
    //   // console.log(friendsData[i].name);
    //   // console.log(friendsData[i]);
    //   for (var i = 0; i < newFriend.scores.length; i++) {
    //     matchScore += difference(friendsData[i].scores[i], newFriend.scores[i]);
    //     console.log("Match: " + friendsData[i].name);
    //     console.log("Match score: " + matchScore);
    //   }
    // }

    // This loop is comparing the survey answers with the existing friends and calculating a match score
    var difference = function(a, b) {
      return Math.abs(a - b);
    };

    // var demoScores = [2, 2, 4, 3, 3, 3, 4, 5, 3, 3]
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

    friendsData.push(req.body);
    res.json("placeholder");
  });
};
