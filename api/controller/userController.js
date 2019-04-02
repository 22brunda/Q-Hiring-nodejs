import mongoose from 'mongoose'
import userModel from '../model/userModel'
import bcrypt from "bcryptjs";
const UserData = mongoose.model('UserInfo', userModel);

//user signup
exports.userSignup = (req, res) => {
  console.log("hiii");
  console.log(req.body);

  

  const { firstname, lastname, email, 
    college, branch, year_of_passing, phonenumber,
    batch, city, password } = req.body;

    const params = {
      firstname,
      lastname,
      email,
      college,
      branch,
      year_of_passing,
      phonenumber,
      batch,
      city,
      password
    }
  // req.checkBody('email', 'Email is not valid').isEmail();
  // const error = req.validationErrors();

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

