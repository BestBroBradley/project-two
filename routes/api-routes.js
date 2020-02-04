var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error 
  app.post("/api/login", passport.authenticate("local"),function(req, res) {
   
if(!req.user){
console.log("no buddy")
}
    res.json(req.user);
  });
};