const Restaurant = require("../Models/Resturent")
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

/**
 * Add Restaurant controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */ 
 const addRestaurant = async (req, res) => {
    try {
      console.log(req.body)
      const result = await cloudinary.uploader.upload(req.file.path);
     // console.log(result)
      const { name, description } = req.body;
      const restaurant = new Restaurant({
        name,
        description,
        image: result.secure_url,
        cloudinary_id: result.public_id,
       
      });
      await restaurant.save();
      res.send("successfully added.");
    } catch (error) {
      res
        .status(400)
        .send("Error while uploading restaurant details. Try again later. Error : " + error);
    }
  }

/**
 * get all restaurants controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */
const getRestaurant = async (req, res) => {
  try {
    const files = await Restaurant.find({});
    const sortedByCreationDate = files.sort(
      (a, b) => b.createdAt - a.createdAt
    );
    res.send(sortedByCreationDate);
  } catch (error) {
    res
      .status(400)
      .send("Error while getting list of restaurant. Try again later. Error : " + error);
  }
}

exports.addRestaurant = addRestaurant;
exports.getRestaurant = getRestaurant; 