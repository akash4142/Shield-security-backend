// utils/sendEmail.js
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

async function sendQuoteEmail(data) {
  const {
    firstName,
    lastName,
    email,
    phone,
    city,
    reason,
    frequency,
    heardFrom,
    message,
  } = data;

  try {
    const response = await resend.emails.send({
      from: 'Shield Security <onboarding@resend.dev>', // ✅ Must use this until domain is verified
      to: 'shieldsecure82@gmail.com',
      subject: `New Quote Request from ${firstName} ${lastName}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Reason:</strong> ${reason}</p>
        <p><strong>Frequency:</strong> ${frequency}</p>
        <p><strong>Heard From:</strong> ${heardFrom}</p>
        <p><strong>Message:</strong><br>${message}</p>
        <p><small>Submitted at ${new Date().toLocaleString()}</small></p>
      `,
    });

    console.log("✅ Email sent:", response);
  } catch (error) {
    console.error("❌ Email sending failed:", error);
  }
}

module.exports = sendQuoteEmail;
