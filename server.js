require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
  	  host: "smtp.office365.com",
  	  port: 587,
  	  secure: false, // STARTTLS
	  auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS
	  }
  });


  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'sales@dynamicvent.com',
    subject: `New Contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ message: 'Error sending email', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
