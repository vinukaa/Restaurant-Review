const User = require("../Models/User"); 



/**
 * sign in controller
 * @param req
 * @param res
 * @returns {Promise<any>}
 */

const signin = async (req, res) => {
  
  try { 
    const getUser = await User.findOne( {"name":req.body.userName} );
    if (!getUser) return res.status(404).json({ message: "Account not found" });
     
    if (getUser) {
        if(getUser.password !== req.body.password){
            return res.status(400).json({
            message: "Login fail", 
        });
    }else{
         return res.status(200).json({
            message: "Login successful",
            User: getUser, 
        });
    }
      
     
    }
  } catch (e) {
    res.status(500).json({ message: "Server error " + e });
  }
}

/**
 * get user details
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */ 
const getUser = async (req, res) => {
   try { 
    let id = req.params.userName;
    const getUser = await User.findOne( {"userName":id} );
   console.log(id);
    if (!getUser){
      return res.status(200).json({ message: "User name available" });
       console.log(getUser);
    } 
    else {
      console.log(getUser);
      return res.status(200).json({ message: "User name not available" });
    }  
  } catch (e) {
    res.status(500).json({ message: "Server error " + e });
  }
}
   
/**
 * user signup
 * @param {*} req 
 * @param {*} res 
 */
const signUp = async (req, res) => {
    try {  
      const { email,password,userName,userRole} = req.body;
      const user = new User({ 
        email:email, 
        password:password,
        name:userName,
        role:userRole,
      });
      
      console.log(user)

      await user.save();
      res.send("successfully registered.");
    } catch (error) {
      res
        .status(400)
        .send("Error while registering. Try again later. " + error);
    }
  }


 
exports.signUp = signUp;
exports.getUser = getUser;
exports.signin = signin; 
