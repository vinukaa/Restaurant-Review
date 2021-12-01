const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController"); 

router.get("/get/:id", orderController.getOrder); 
router.post( "/add", orderController.addOrder);  
router.put("/update/:id", orderController.updateOrder);
router.delete("/delete/:id", orderController.deleteOrder);

module.exports = router;
