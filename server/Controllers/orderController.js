const Order = require("../Models/Order"); 


/**
 * get order details
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */ 
const getOrder = async (req, res) => {
   try { 
    let id = req.params.id;
    const OrderList = await Order.find( {"userId":id} ); 
    if (OrderList){ 
      return res.status(200).json({ message: "Data available",data:OrderList });
    } 
    else {
      return res.status(200).json({ message: "Data not available" });
    }  
  } catch (e) {
    res.status(500).json({ message: "Server error " + e });
  }
}
   
/**
 * add order
 * @param {*} req 
 * @param {*} res 
 */
const addOrder = async (req, res) => {
    try {  
      const { hotelId,userId,itemName,itemId,unitPrice,totalPrice,qty} = req.body;
      console.log(req.data)
      const newOrder = new Order({ 
        hotelId:hotelId, 
        itemName:itemName, 
        userId:userId,
        itemId:itemId,
        unitPrice:unitPrice,
        totalPrice:totalPrice,
        qty:qty
      });
      
      console.log(newOrder)

      await newOrder.save();
      res.send("successfully added.");
    } catch (error) {
      res
        .status(400)
        .send("Error while adding. Try again later. " + error);
    }
  }

  
/**
 * update order details
 * @param {*} req 
 * @param {*} res 
 */
const updateOrder = async (req, res) => {
  try {
     const { hotelId,userId,itemName,itemId,unitPrice,totalPrice,qty} = req.body;

    let order = await Order.findById(req.params.id); 
    const data = { 
        hotelId:order.hotelId, 
        itemName:order.itemName, 
        userId:order.userId,
        itemId:order.itemId,
        unitPrice:unitPrice,
        totalPrice:totalPrice,
        qty:qty
      };
      
      console.log(data);
    order = await Order.updateOne({'_id':req.params.id}, data, { new: true });
    res.json(order);
    console.log(order)
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
};


/**
 * delete order details
 * @param {*} req 
 * @param {*} res 
 */
const deleteOrder = async (req, res) => {
  const OrderId = req.params.id;

  const order = await Order.findById(OrderId);
  if (!order) {
    console.log("Error deleting");
  }
  await order.remove((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
};

exports.addOrder = addOrder;
exports.getOrder = getOrder; 
exports.updateOrder = updateOrder; 
exports.deleteOrder = deleteOrder; 
