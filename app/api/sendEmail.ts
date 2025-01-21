import nodemailer from "nodemailer";

export default async function handler(req:any, res:any) {
  if (req.method === "POST") {
    const { name, email, phone, issueType, message } = req.body;

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Use Gmail or your preferred email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
     },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: `"Customer Support" <your-email@gmail.com>`, // Sender address
        to: "bashartc13@gmail.com", // Receiver email
        subject: `New Support Request from ${name}`,
        html: `
          <h3>New Support Request</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Issue Type:</strong> ${issueType}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Email sending error:", error);
      res.status(500).json({ message: "Failed to send email.", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
