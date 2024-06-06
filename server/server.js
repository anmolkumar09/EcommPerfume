
const express = require("express");
const cors = require("cors");
const ConnectDB = require("./modals/db.js")
const dotenv = require("dotenv");
const emailRoute = require("./Routes/emailRoute.js");
const session = require('express-session')
const userRoute = require("./Routes/userRoute.js")
// const session = require("express-session")
dotenv.config();
const app = express();

app.use(cors());
// Session setup
// app.use(session({
//   secret: process.env.SESSION_SECRET, // Replace with your own secret key
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: false } // Set to true if using HTTPS
// }));
app.use(express.json());

app.use('/email',emailRoute)
app.use('/api/users',userRoute)
ConnectDB()
app.listen(5000, () => {
  console.log("server is listen on 5000 port");
});
