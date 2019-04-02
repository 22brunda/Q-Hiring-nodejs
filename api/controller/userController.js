import mongoose from 'mongoose'
import userModel from '../model/userModel'
 
const user = mongoose.model('UserInfo', userModel);




import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const UserData = mongoose.model('UserInfo');

//user signup
exports.userSignup = (req, res) => {
  console.log("hiii");
  console.log(req.body);

  // // const email = req.body.email;
  // req.checkBody('email', 'Email is not valid').isEmail();
  // const error = req.validationErrors();

  const { firstname, lastname, email, 
    college, year_of_passing, phonenumber,
    batch, city, password } = req.body;

    const params = {
      firstname,
      lastname,
      email,
      college,
      year_of_passing,
      phonenumber,
      batch,
      city,
      password
    }

    if(error){
      res.send(error);
    }else{
      UserData.find({email: req.body.email})
      .then(data => {
        if(data != null && data != ''){
          res.send('User already exists');
        }
        else
        {
          var userData = new UserData(params);
          bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(userData.password, salt, function(err, hash) {
              userData.password = hash;
              userData.save()
              .then(data => {
                return res.status(200).json({
                  message: "new user", data
                });
              })
              .catch(err => {
                res.status(400).send(err.message);
              })    
            })
          })
        }
      })
    };

  }