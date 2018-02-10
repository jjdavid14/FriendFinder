// ===============================================================================
// LOAD DATA
// 
// Hold the data from friends into allFriends
// ===============================================================================

var allFriends = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Display the JSON of all friends available
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(allFriends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // When a user submits form data (a JSON object) the user response from in the JSON
  // will be analyzed and compared to each friend in the friends JavaScript array.
  // ---------------------------------------------------------------------------

// TODO: Push friend entry into array
  app.post("/api/friends", function(req, res) {
    // This will send out the friend matched with user
    // req.body is available since we're using the body-parser middleware
    console.log(req.body);
    // TODO: Logic to matching goes here.

    // Get the user's response
    // This is an array.
    var userResponse = req.body.scores;
    // Lowest value of difference from user (least "compatibility" score)
    var least = -1;
    // Index of friend with lowest value of difference from user
    var indexOfFriend = -1;

    // Iterate through all the available Friends
    for(var i = 0; i < allFriends.length; i++) {
      // Keep track of the response of the current friend in the iteration.
      // This is an array.
      var friendResponses = allFriends[i].scores;
      // This keeps track of the current "compatibility" score of this friend
      var tempScore = 0;

      // Iterate through each response for both the user and current friend
      for(var j = 0; j < friendResponses.length; j++) {
        // Calculate the difference and if the absolute value is > 0
        // Add to tempScore.
        var difference = Math.abs(userResponse[j] - friendResponses[j]);
        if(difference > 0) {
          tempScore += difference;
        }
      }

      // Check if the tempScore is lower than the current lowest "compatibility" score
      if(tempScore < least) {
        // Then update least to hold the new lowest score
        least = tempScore;
        // Also keep track of the friend's index that had this low score
        indexOfFriend = i;
      }


    }


    // We return the best match for the user based on the "compatibility" score
    res.json(allFriends[indexOfFriend]);

  });

};
