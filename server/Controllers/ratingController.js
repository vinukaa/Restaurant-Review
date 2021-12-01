const Rating = require("../Models/Rating"); 


/**
 * get rating details
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */ 
const getRating = async (req, res) => {
   try { 
    let id = req.params.id;
    const hotelList = await Rating.find( {"hotelId":id} );
   console.log(id);
    if (hotelList){ 
      return res.status(200).json({ message: "Data available",data:hotelList });
    } 
    else {
      return res.status(200).json({ message: "Data not available" });
    }  
  } catch (e) {
    res.status(500).json({ message: "Server error " + e });
  }
}
   
/**
 * add rating
 * @param {*} req 
 * @param {*} res 
 */
const addRating = async (req, res) => {
    try {  
      const { restaurantId,userId,name,rating,review} = req.body;
      console.log(req.data)
      const newRating = new Rating({ 
        hotelId:restaurantId, 
        userName:name, 
        userId:userId,
        rating:rating,
        description:review,
      });
      
      console.log(newRating)

      await newRating.save();
      res.send("successfully added.");
    } catch (error) {
      res
        .status(400)
        .send("Error while adding. Try again later. " + error);
    }
  }


 
exports.addRating = addRating;
exports.getRating = getRating; 
