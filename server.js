import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import expressValidator from "express-validator";
// import jsonwebtoken from "jsonwebtoken";

const app = express();

app.use(express.json());

//body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(expressValidator());

// app.use((error,req,res,next) => {
//   console.log(error);
//   const status = error.statusCode || 500;
//   const message = error.message;
//   res.status(status).json({
//     message:message
//   });
// });

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/UserData');

//set port
app.set('port', (process.env.PORT || 3002));
app.listen(app.get('port'), function(){
  console.log(' Server started on port ' + app.get('port'));
});