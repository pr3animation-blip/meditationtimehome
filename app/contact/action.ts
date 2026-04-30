"use server"

import { headers } from "next/headers"
import { resend } from "@/lib/resend"
import { contactEmailRateLimit, contactIpRateLimit } from "@/lib/ratelimit"
import { siteConfig } from "@/config/navigation"

type ContactFormState = {
  success: boolean
  error?: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const LIMITS = {
  name: 200,
  email: 254,
  phone: 50,
  message: 5000,
} as const

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot: real users leave this blank; bots tend to fill every field.
  if (((formData.get("website") as string) || "").trim() !== "") {
    return { success: true }
  }

  if (contactIpRateLimit) {
    const headerList = await headers()
    const forwardedFor = headerList.get("x-forwarded-for")
    const ip =
      forwardedFor?.split(",")[0]?.trim() ||
      headerList.get("x-real-ip") ||
      "unknown"
    const { success } = await contactIpRateLimit.limit(ip)
    if (!success) {
      return {
        success: false,
        error: "Too many submissions. Please try again in an hour.",
      }
    }
  }

  const name = ((formData.get("name") as string) || "").trim()
  const email = ((formData.get("email") as string) || "").trim()
  const phoneRaw = ((formData.get("phone") as string) || "").trim()
  const message = ((formData.get("message") as string) || "").trim()

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." }
  }

  if (
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    phoneRaw.length > LIMITS.phone ||
    message.length > LIMITS.message
  ) {
    return { success: false, error: "One or more fields exceed the maximum length." }
  }

  if (!EMAIL_REGEX.test(email)) {
    return { success: false, error: "Please enter a valid email address." }
  }

  const emailKey = email.toLowerCase()

  if (contactEmailRateLimit) {
    const { success } = await contactEmailRateLimit.limit(emailKey)
    if (!success) {
      return {
        success: false,
        error: `We already received a message from this email recently. Please wait 24 hours, or call us directly at ${siteConfig.phone}.`,
      }
    }
  }

  const phone = phoneRaw || "Not provided"

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

    // Courtesy auto-reply. Failure here must not block success — the
    // visitor's message already reached Victoria.
    try {
      const firstName = name.split(/\s+/)[0] || name
      await resend.emails.send({
        from: `${siteConfig.name} <noreply@contact.meditationtimehome.com>`,
        to: [email],
        replyTo: siteConfig.email,
        subject: `We received your message — ${siteConfig.name}`,
        text: [
          `Hi ${firstName},`,
          "",
          `Thank you for reaching out to ${siteConfig.name}. We've received your message and Victoria will respond within 24 hours.`,
          "",
          `If you need to follow up or share anything else, you can write to Victoria directly at ${siteConfig.email}.`,
          "",
          "If you'd like to book a session in the meantime, you can do so directly here:",
          siteConfig.calendlyUrl,
          "",
          "For your records, here's a copy of what you sent:",
          "",
          message,
          "",
          "Warmly,",
          "Victoria",
          siteConfig.name,
          siteConfig.phone,
          siteConfig.email,
          siteConfig.address,
        ].join("\n"),
      })
    } catch (autoReplyError) {
      console.error("Auto-reply error (non-blocking):", autoReplyError)
    }

    return { success: true }
  } catch (e) {
    console.error("Contact form error:", e)
    return { success: false, error: "Something went wrong. Please try again." }
  }
}
