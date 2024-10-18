const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 3030;

// Middleware untuk logging setiap request
app.use((req, res, next) => {
  next(); // Lanjutkan ke middleware atau route berikutnya
});

// Middleware CORS
app.use(
  cors({
    origin: "*", // Mengizinkan hanya origin ini
    methods: ["GET", "POST", "OPTIONS"], // Metode yang diizinkan
    allowedHeaders: ["Content-Type", "Authorization"], // Header yang diizinkan
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint untuk mengirim email
app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: subject,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email." });
  }
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Email service running on http://localhost:${PORT}`);
});
