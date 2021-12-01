const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/resturentController");
const upload = require("../utils/multer");

router.get("/get", restaurantController.getRestaurant); 
router.post( "/add",upload.single("images") , restaurantController.addRestaurant);  

module.exports = router;
