'use server';
import nodemailer from 'nodemailer';
const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;
const SITE_MAIL_SENDER = process.env.SITE_MAIL_SENDER;

export async function sendWelcomingEmail(email: string) {
    const response = await fetch('/emails/waitlist-signup.html'); // Update this line
    const htmlTemplate = await response.text();
    await sendMail({
        sendTo: email,
        subject: 'Welcome to the Waitlist!',
        html: htmlTemplate,
    });
}

export async function sendMail({
  sendTo,
  subject,
  text,
  html,
}: {
  sendTo?: string;
  subject: string;
  text?: string;
  html?: string;
}) {

    const transporter = nodemailer.createTransport({
        host: SMTP_SERVER_HOST,
        tls: {
            ciphers:'SSLv3'
        },
        requireTLS: true,
        port: 587,
        secure: false,
        auth: {
            user: SMTP_SERVER_USERNAME,
            pass: SMTP_SERVER_PASSWORD,
        },
    });

  try {
    const isVerified = await transporter.verify();
  } catch (error) {
    console.error('Something Went Wrong', SMTP_SERVER_USERNAME, SMTP_SERVER_PASSWORD, error);
    return;
  }
  const info = await transporter.sendMail({
    from: `Adventurer Guide ${SITE_MAIL_SENDER}`,
    to: sendTo,
    bcc: SITE_MAIL_RECIEVER,
    subject: subject,
    text: text ? text : '',
    html: html ? html : '',
  });
  console.log('Message Sent', info.messageId);
  return info;
}