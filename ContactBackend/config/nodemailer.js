import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "rishikajat03@gmail.com",
        pass: "gyen cncb dovl sevn",
    },
});

transport.verify((error) => {
    if (error) {
        console.error('Error connecting to mail server:', error);
    } else {
        console.log('Mail server is ready to take messages');
    }
});

export default transport;
