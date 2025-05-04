import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const sendMail = (mailOptions) => {
    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_HOST,
        port: process.env.MAILTRAP_PORT,
        secure: false,
        auth: {
            user: process.env.MAILTRAP_USERNAME,
            pass: process.env.MAILTRAP_PASSWORD,
        },
    });
    
    transporter.sendMail(mailOptions);
}

export default sendMail;