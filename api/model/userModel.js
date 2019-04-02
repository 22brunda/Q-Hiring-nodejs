import { model, Schema } from 'mongoose';

// var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  college: {
    type: String,
    required: true
  },
  year_of_passing: {
    type: Number,
    required: true
  },
  phonenumber: {
    type: Number,
    required: true
  },
  batch: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = model('UserInfo', UserSchema);