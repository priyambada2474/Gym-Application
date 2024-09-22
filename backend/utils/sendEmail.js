import nodeMailer from 'nodemailer';

export const sendEmail = async (options) => {
    try {
        const transporter = nodeMailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true, // Use SSL/TLS
            auth: {
                user: process.env.SMTP_MAIL,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_MAIL,
            to: options.email,
            subject: options.subject,
            text: `${options.message} \n\nEmail of User who sent the message: ${options.userEmail}`,
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
};

export default sendEmail;
