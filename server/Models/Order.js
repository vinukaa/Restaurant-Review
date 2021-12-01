
const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    hotelId: {
      type: String,
    },

    userId: {
      type:String ,
    },

    itemId: {
      type:String ,
    },

    itemName: {
      type:String ,
    },

    unitPrice: {
      type:Number ,
    },

    totalPrice: {
      type: Number,
    }, 

    qty: {
      type: Number,
    }, 

  },
  { timesamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);
