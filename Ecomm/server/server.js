// mongodb+srv://xyz:Xyz123@cluster0.uyddls8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express = require("express");
const cors = require("cors");
// const transporter = require("./config/config");
const dotenv = require("dotenv");
const emailRoutes = require("./routes/emailRoute")
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });

// routes
app.use('/email',emailRoutes)

app.listen(5000, () => {
  console.log("server is listen on 5000 port");
});
