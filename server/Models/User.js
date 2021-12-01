const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },

    email: {
      type:String ,
    },

    password: {
      type:String ,
    },

    role: {
      type: String,
    }, 
  },
  { timesamps: true }
);

module.exports = mongoose.model('User', UserSchema);
