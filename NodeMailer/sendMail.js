const nodeMailer=require('nodemailer')
const emails=['renjishavj@gmail.com']
const dotenv=require("dotenv").config()
const pass=process.env.PASS

 const sendMail=async (emails,otp)=>{
  const transporter=  nodeMailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:'renjishavj@gmail.com',
            pass:`${pass}`
        }
    });
   const info= await transporter.sendMail({
    from:'"Nodemailer"<renjishavj@gmail.com>',
    to:emails,
    subject:'testinggggggg',
    html:`<h2>${otp}</h2>`,

   })
  
}
module.exports=sendMail