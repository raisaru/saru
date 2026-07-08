import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Method Not Allowed",
        });
    }

    try {
        const { name, email, subject, message } = req.body;

        // Send email to Admin
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: `New Contact Form: ${subject}`,
            html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Subject:</strong> ${subject}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
        });

        // Send confirmation email to Visitor
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Thank you for contacting me",
            html: `
        <h2>Hello ${name},</h2>

        <p>Thank you for contacting me.</p>

        <p>I have received your message and will reply as soon as possible.</p>

        <br>

        <p>Best Regards,</p>
        <p><strong>Saru Rai</strong></p>
      `,
        });

        return res.status(200).json({
            success: true,
            message: "Emails sent successfully",
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Failed to send email",
        });
    }
}