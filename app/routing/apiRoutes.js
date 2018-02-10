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
    
    // TODO: Logic to matching goes here.

  });

};
