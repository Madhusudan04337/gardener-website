"use server"

export async function submitQuoteForm(formData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const mobile = formData.get("mobile")
  const serviceType = formData.get("serviceType")
  const message = formData.get("message")

  // Basic validation
  if (!name || !email || !mobile || !serviceType || !message) {
    return { success: false, message: "All fields are required." }
  }

  // In a real application, you would integrate with an email sending service here.
  // For example, using Resend, Nodemailer, SendGrid, etc.
  // Example with a hypothetical email service:
  // try {
  //   await emailService.sendEmail({
  //     to: 'info@innovategardens.com',
  //     from: 'noreply@yourdomain.com',
  //     subject: `New Quote Request from ${name}`,
  //     html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Mobile: ${mobile}</p><p>Service Type: ${serviceType}</p><p>Message: ${message}</p>`,
  //   });
  //   console.log("Email sent successfully!");
  //   return { success: true, message: "Your message has been sent successfully! We will get back to you soon." };
  // } catch (error) {
  //   console.error("Failed to send email:", error);
  //   return { success: false, message: "There was an error sending your message. Please try again later." };
  // }

  // For now, we'll just log the data and simulate success after a delay
  console.log("Received quote request:")
  console.log(`Name: ${name}`)
  console.log(`Email: ${email}`)
  console.log(`Mobile: ${mobile}`)
  console.log(`Service Type: ${serviceType}`)
  console.log(`Message: ${message}`)

  await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulate network delay

  return { success: true, message: "Your message has been sent successfully! We will get back to you soon." }
}
