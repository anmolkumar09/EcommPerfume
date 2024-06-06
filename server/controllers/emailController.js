const nodemailer = require("nodemailer");
const dotenv = require("dotenv")

dotenv.config()
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASS,
  },
});



// now creating function for getting email from frontend 

const sendEmail = (req,resp)=>{

    const {email,subject,message} = req.body;
    console.log(email,subject,message)

    const mailOptions = {
        from : process.env.SMTP_MAIL,
        to : email,
        subject: subject,
        text : message
    }

    transporter.sendMail(mailOptions,function(error,info){
        
        if(error){
            console.log(error)
        }
        console.log("Email sent successfully")
    })
}
module.exports = sendEmail;
