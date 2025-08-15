import { NextApiRequest, NextApiResponse } from 'next';
import Mailgun from 'mailgun.js';
import FormData from 'form-data';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, projectDescription } = req.body;

  if (!name || !email || !projectDescription) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY || '',
    });

    const emailData = {
      from: `Commercial Contact Form <noreply@${process.env.MAILGUN_DOMAIN}>`,
      to: 'studio@amaykataria.com',
      subject: `New Project Inquiry from ${name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Description:</strong></p>
        <p>${projectDescription.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted on: ${new Date().toLocaleString()}</small></p>
      `,
      text: `
        New Project Inquiry
        
        Name: ${name}
        Email: ${email}
        Project Description: ${projectDescription}
        
        Submitted on: ${new Date().toLocaleString()}
      `
    };

    await mg.messages.create(process.env.MAILGUN_DOMAIN || '', emailData);
    
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}