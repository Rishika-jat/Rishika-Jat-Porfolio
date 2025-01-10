import transport from "../config/nodemailer.js";

const sendEmail = (req, res) => {
    const { name, email, message } = req.body;

    // Validate the user input
    if (!name || !email || !message) {
        return res.status(400).send({ message: 'Name, email, and message are required.' });
    }

    // Send the message to your email (the admin)
    const mailOptionsToAdmin = {
        from: email,  // User's email as the sender
        replyTo: email,  // User's email for replies
        to: "rishikajat03@gmail.com",  // Your email as the recipient
        subject: `Mail from ${name}`,
        text: message,
    };

    // First send the email to your email
    transport.sendMail(mailOptionsToAdmin, (error, info) => {
        if (error) {
            console.error('Error sending email to admin:', error);
            return res.status(500).send({ message: 'Failed to send email.', error: error.message });
        }
            res.status(200).send({ message: 'Email sent successfully' });
        
      
        // If the first email is sent successfully, send confirmation to the user
        const mailOptionsToUser = {
            from: "rishikajat03@gmail.com",  // Your email as the sender
            to: email,  // User's email as the recipient
            subject: `Message Received: ${name}`,
            text: `Hi ${name},\n\nI have successfully received your message. I will get back to you shortly.\n\nMessage:\n"${message}"\n\nThank you!`,
        };
    
        transport.sendMail(mailOptionsToUser, (error2, info2) => {
            if (error2) {
                console.error('Error sending confirmation to user:', error2);
                return res.status(500).send({ message: 'Failed to send confirmation email.', error: error2.message });
            }

            console.log('Confirmation email sent to user:', info2);
            return res.status(200).send({ message: 'Message received, confirmation email sent.' });
        });
    });

};

export default sendEmail;
