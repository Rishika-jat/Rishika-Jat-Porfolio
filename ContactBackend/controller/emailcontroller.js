// import transport from "../config/nodemailer.js";
// import dotenv from "dotenv";
// dotenv.config({path:'./config/config.env'})
// const sendEmail = (req, res) =>{
//     const {name,email,message} = req.body;

//     const mailOptions ={
//         from:email,
//         to:process.env.EMAIL_USER,
//         subject:`Mail from ${name}`,
//         text:message
//     }
//     transport.sendEmail(mailOptions,(error)=>{
//         if(error){
//             return res.status(500).send({message:'Fail'});
//         }else{
//             return res.status(200)({message:'Success'});
//         }
//     })
// }

// export default sendEmail;
import transport from "../config/nodemailer.js";

const sendEmail = (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: "rishikajat03@gmail.com",
        subject: `Mail from ${name}`,
        text: message,
    };

    transport.sendMail(mailOptions, (error) => {
        if (error) {
            return res.status(500).send({ message: 'Fail', error: error.message });
        } else {
            return res.status(200).send({ message: 'Email sent successfully' });
        }
    });
};

export default sendEmail;
