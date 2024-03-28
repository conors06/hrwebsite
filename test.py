import smtplib
import logging

# Set up logging
logging.basicConfig(filename='sendEmail.log', level=logging.INFO)

# Set up the email server
smtp_server = 'smtp.zoho.eu'
smtp_port = 465
smtp_user = 'annamarie@walshehr.ie'
smtp_password = 'Moycullen72?'

# Create the email message
email_from = 'annamarie@walshehr.ie'
email_to = 'annamarie@walshehr.ie'
email_subject = 'Test email'
email_body = 'This is a test email123.'

# Send the email
try:
    server = smtplib.SMTP_SSL(smtp_server, smtp_port)
    server.login(smtp_user, smtp_password)
    server.sendmail(email_from, email_to, f'Subject: {email_subject}\n\n{email_body}')
    logging.info('Email sent successfully.')
except Exception as e:
    logging.error(f'Error sending email: {e}')
    raise
finally:
    server.quit()