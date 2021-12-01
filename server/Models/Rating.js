
const mongoose = require("mongoose");

const RatingSchema = mongoose.Schema(
  {
    hotelId: {
      type: String,
    },

    userId: {
      type:String ,
    },

    userName: {
      type:String ,
    },

    rating: {
      type:String ,
    },

    description: {
      type: String,
    }, 
  },
  { timesamps: true }
);

module.exports = mongoose.model('Rating', RatingSchema);
