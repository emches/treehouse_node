// Problem: We need a simple way to look at a user's badge count and javascript points
var profile = require("./profile.js");
var users = process.argv.slice(2);

users.forEach(profile.get)

// profile.get("chalkers");
// profile.get("joykesten2");