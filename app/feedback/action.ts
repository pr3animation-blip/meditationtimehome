"use server"

import { resend } from "@/lib/resend"
import { siteConfig } from "@/config/navigation"

type ReviewFormState = {
  success: boolean
  error?: string
}

export async function sendReviewEmail(
  _prev: ReviewFormState,
  formData: FormData
): Promise<ReviewFormState> {
  const name = formData.get("name") as string
  const rating = formData.get("rating") as string
  const review = formData.get("review") as string

  if (!name || !rating || !review) {
    return { success: false, error: "Please fill in all fields." }
  }

  const stars = "★".repeat(Number(rating)) + "☆".repeat(5 - Number(rating))

  try {
    const { error } = await resend.emails.send({
      from: `${siteConfig.name} <noreply@contact.meditationtimehome.com>`,
      to: ["pr3animation@gmail.com"],
      subject: `New Client Review from ${name} — ${siteConfig.name}`,
      text: [
        `New Client Review — ${siteConfig.name}`,
        "",
        `Name: ${name}`,
        `Rating: ${stars} (${rating}/5)`,
        "",
        "Review:",
        review,
        "",
        "---",
        "To feature this on the website, add it to the testimonials array in config/site-data.ts",
      ].join("\n"),
    })

    if (error) {
      console.error("Resend error:", error)
      return { success: false, error: "Failed to send review. Please try again." }
    }

    return { success: true }
  } catch (e) {
    console.error("Review form error:", e)
    return { success: false, error: "Something went wrong. Please try again." }
  }
}
