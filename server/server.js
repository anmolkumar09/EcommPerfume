// mongodb+srv://xyz:Xyz123@cluster0.uyddls8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express = require("express");
const cors = require("cors");
const transporter = require("./config/config");
const dotenv = require("dotenv");
// const {  } = require("./config/config");
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact", async (req, resp) => {
  //   const { to, subject, text } = req.body;

  try {
    //send email  using nodemailer
    await transporter.sendMail({
      from: req.body.email,
      to: process.env.email,
      message: req.body.message,
    });
    // alert("Message sent successfully");
    resp.status(200).json({
      message: "Email sent successfully!",
    });
  } catch (err) {
    console.error("Error sending email:", err);
    resp
      .status(500)
      .json({ error: "Failed to send email. Please try again later." });
  }
});
app.listen(5000, () => {
  console.log("server is listen on 5000 port");
});
