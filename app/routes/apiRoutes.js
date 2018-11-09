const friends = require('../data/friends');

// ========================================
//Routing
// ========================================

module.exports = function (app) {
  // Displays all reservations
  app.get("/api/friends", function (req, res) {
    return res.json(friends);
  });

  // Create New Characters - takes in JSON input
  app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newFriend = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newFriend.friendName = newFriend.friendName.replace(/\s+/g, "").toLowerCase();

    console.log(newFriend);

    friends.push(newFriend);

    res.json(true);
  });
};