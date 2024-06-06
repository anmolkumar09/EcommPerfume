const UserModal = require("../modals/modals");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
    // Getting data from req.body
    const { username, email, password } = req.body;
  
    try {
      let user = await UserModal.findOne({ email });
  
      if (user) {
        return res.status(400).json({ message: "User Already Exists!" });
      } else {
        // Hashing Password
        let salt = await bcrypt.genSalt(10);
        let hashPass = await bcrypt.hash(password, salt);
        
        let newUser = new UserModal({ username, email, password: hashPass });
  
        await newUser.save();
  
        // Generate JWT token
        const payload = {
          user: {
            id: newUser.id
          }
        };
  
        jwt.sign(
          payload,
          process.env.JWT_SECRET,
          { expiresIn: "30d" },
          (err, token) => {
            if (err) throw err;
            res.status(201).json({ message: "User Registered Successfully!", token });
          }
        );
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Error in Registration');
    }
  };
  
// login controller 


const loginController = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find user by email
      let user = await UserModal.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }
  
      // Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }
  
      // Generate JWT token
      const payload = {
        user: {
          id: user.id
        }
      };
  
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "30d" },
        (err, token) => {
          if (err) throw err;
          res.json({ message:"Login Successfull ",token });
        }
      );
  
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  };
  
 
  
// logout COntroller 

const logoutController = (req,resp)=>{

 resp.status(200).json({message:"Logout successfully"})
}
module.exports = {
    loginController,
    registerController,
    logoutController
  };
  
