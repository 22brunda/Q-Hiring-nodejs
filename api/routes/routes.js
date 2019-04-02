module.exports = function(app) {
  var userRoute = require('../controller/userController');
    //Route for Signup
    app.route('/signup')
    .post(userRoute.userSignup);
  };