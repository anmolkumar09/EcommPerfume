

const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if no token
  if (!token) {
    return res.status(401).json({ message: "No token provided", success: false });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    // Success message
    const successMessage = "Authentication successful"; 
    res.status(200).json({ message: successMessage, success: true });
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid", success: false });
  }
};
