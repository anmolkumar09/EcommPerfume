
const express = require("express");
const cors = require("cors");
const ConnectDB = require("./modals/db.js")
const dotenv = require("dotenv");
const emailRoute = require("./Routes/emailRoute.js");
// const session = require('express-session')
const userRoute = require("./Routes/userRoute.js")
// const session = require("express-session")
// const UserReview = require('./modals/reviewModals.js')
dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());

app.use('/email',emailRoute)
app.use('/api/users',userRoute)
ConnectDB()
app.listen(5000, () => {
  console.log("server is listen on 5000 port");
});
