"use server"

import { resend } from "@/lib/resend"
import { siteConfig } from "@/config/navigation"

type ContactFormState = {
  success: boolean
  error?: string
}

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = (formData.get("phone") as string) || "Not provided"
  const message = formData.get("message") as string

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." }
  }

  try {
    const { error } = await resend.emails.send({
      from: `${siteConfig.name} <noreply@contact.meditationtimehome.com>`,
      to: [siteConfig.email],
      replyTo: email,
      subject: `New inquiry from ${name} — ${siteConfig.name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    })

    if (error) {
      console.error("Resend error:", error)
      return { success: false, error: "Failed to send message. Please try again." }
    }

    return { success: true }
  } catch (e) {
    console.error("Contact form error:", e)
    return { success: false, error: "Something went wrong. Please try again." }
  }
}
