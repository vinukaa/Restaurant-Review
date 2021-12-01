
const mongoose = require("mongoose");

const RestaurantSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },

    description: {
      type:String ,
    },

    image: {
      type: String 
    },

    cloudinary_id: { 
      type: String 
    },
 
  },
  { timesamps: true }
);

module.exports = mongoose.model('Restaurant', RestaurantSchema);
