

const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database is connected");
  } catch (error) {
    console.error("Database is not connected", error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
