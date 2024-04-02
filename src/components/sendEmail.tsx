'use server';
import nodemailer from 'nodemailer';


export const sendEmail = async (formData: FormData) => {
    const rawFormData = {
        email: formData.get('email'),
        name: formData.get('name'),
        phoneNumber: formData.get('phone-number'),
        message: formData.get('message'),
    };

    console.log('Form Data:', rawFormData);

    // Create a SMTP transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp.zoho.eu',
        port: 465,
        secure: true,
        auth: {
            user: 'annamarie@walshehr.ie',
            pass: 'Moycullen72?',
        },
    });

    // Define email options
    const mailOptions = {
        from: 'annamarie@walshehr.ie',
        to: 'annamarie@walshehr.ie',
        subject: 'New message from your website',
        text: `
      Name: ${rawFormData.name}
      Email: ${rawFormData.email}
      Phone Number: ${rawFormData.phoneNumber}
      Message: ${rawFormData.message}
    `,
    };

    // Send email
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        return true; // Return true to indicate successful email send
    } catch (error) {
        console.error('Error sending email:', error);
        return false; // Return false to indicate failed email send
    }
};