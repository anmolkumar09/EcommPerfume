const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const transporter = nodemailer.createTransport({
  
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASS,
  },
});

const sendEmail = (req,resp)=>{
  const {email,number,message} = req.body;

  console.log(email,number,message)

  var mailOptions ={
    from: process.env.SMTP_MAIL,
    to:email,
    number:number,
    text:message,
  }

  transporter.sendMail(mailOptions ,function(error,info){

    if(error){
      console.log(error)
    }
    else{
      console.log("Email sent successfully")
    }
  })
}

module.exports = {sendEmail}
// obrz dxry arnc pujr