

const express = require('express');
const {registerController, loginController,logoutController} = require('../controllers/controllers');

const auth = require('../middleware/auth.js');

const router = express.Router();

// Registration route
router.post("/register", registerController);

// Login route
router.post("/login", loginController);

//Logout route 
router.post("/logout",logoutController)
// Protected route example
router.get("/protected", auth, (req, res) => {
    res.status(200).json({ message: 'Access granted', success: true });
});

module.exports = router;
