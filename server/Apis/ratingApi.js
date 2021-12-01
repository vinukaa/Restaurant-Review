const express = require("express");
const router = express.Router();
const RatingController = require("../controllers/ratingController");

router.get("/get/:id", RatingController.getRating); 
router.post("/add", RatingController.addRating);    

module.exports = router;
