import express from "express";
import routes from './api/routes/routes'
import mongoose from "mongoose";
import bodyParser from "body-parser";
import expressValidator from "express-validator";
// import jsonwebtoken from "jsonwebtoken";

const app = express();

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:/UserInfo');

//body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

routes(app)

//set port
app.set('port', (process.env.PORT || 3002));
app.listen(app.get('port'), function(){
  console.log(' Server started on port ' + app.get('port'));
});