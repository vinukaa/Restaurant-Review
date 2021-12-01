const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/get", userController.getUser); 
router.post("/signin", userController.signin); 
router.post("/signup", userController.signUp);  

module.exports = router;
