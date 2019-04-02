import express from "express";
// import userRoute from "../controller/userController";

// const router = express.Router();

// router.post("/api/signup", userRoute.userSignup);

module.exports = function(app) {

  const userRoute = require('../controller/userController');

  app.route('/signup')
    .post(userRoute.userSignup);
};