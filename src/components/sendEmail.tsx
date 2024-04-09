'use server'
import { createTransport, } from 'nodemailer'

export const sendEmail = async (formData: FormData) => {
  const { email, name, phoneNumber, message } = Object.fromEntries(
    formData.entries(),
  )

  // Create a SMTP transporter
  const transporter = createTransport({
    host: 'smtp.zoho.eu',
    port: 465,
    secure: true,
    auth: {
      user: 'annamarie@walshehr.ie',
      pass: 'UgUGkBdiXqtM',
    },
  })

  // Define email options
  const mailOptions = {
    from: 'annamarie@walshehr.ie',
    to: 'annamarie@walshehr.ie',
    subject: 'New message from your website',
    text: `
  Name: ${name}
  Email: ${email}
  Phone Number: ${phoneNumber}
  Message: ${message}
`,
  }

  // Send email
  try {
    await transporter.sendMail(mailOptions)
    return true // Return true to indicate successful email send
  } catch (error) {
    console.error('Error sending email:', error)
    return false // Return false to indicate failed email send
  }
}
