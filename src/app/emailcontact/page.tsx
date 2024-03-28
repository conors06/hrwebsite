import nodemailer from 'nodemailer';

const sendEmail = async (req: any, res: any) => {
  const { name, email, phone, message } = req.body;

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.eu', // hostname of your smtp server
    port: 465, // port of your smtp server
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'annamarie@walshehr.ie', // your email address
      pass: 'Moycullen72?', // your password
    },
  });

  // Send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Email" ${email}', // sender address
    to: 'annamarie@walshehr.ie', // list of receivers
    subject: `New message from ${name}`, // Subject line
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`, // plaintext body
  });

  console.log('Message sent: %s', info.messageId);

  res.status(200).json({ success: true });
};

export default sendEmail;