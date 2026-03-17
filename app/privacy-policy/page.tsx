import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy, website disclaimer, and data handling practices for MEditation TIME in Chandler, Arizona. Learn how we protect your personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" subtitle="Website Disclaimer" />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-8 px-4 md:px-8">
          <div className="space-y-4">
            <h2 className="font-serif text-xl font-medium">Website Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              The information on this site is not intended or implied to be a
              substitute for professional medical advice, diagnosis or treatment.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              All content serves informational purposes only. Victoria Enriquez
              and MEditation TIME make no claims regarding accuracy of information
              presented and reserve the right to modify content without notice.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Users are encouraged to verify information through additional sources
              and consult physicians about medical conditions.
            </p>
            <p className="font-semibold text-foreground leading-relaxed">
              NEVER DISREGARD PROFESSIONAL MEDICAL ADVICE OR DELAY SEEKING MEDICAL
              TREATMENT BECAUSE OF SOMETHING YOU HAVE READ ON OR ACCESSED THROUGH
              THIS WEBSITE OR PROGRAM.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-xl font-medium">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              When you contact us through the website or book a session, we may
              collect your name, email address, phone number, and any details
              you share about your wellness goals. This information is used
              solely to respond to your inquiry and provide the services you
              request.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell, trade, or share your personal information with
              third parties. Your data is stored securely and accessed only by
              Victoria Enriquez and authorized staff at MEditation TIME.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-xl font-medium">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              This website may contain links to third-party services such as
              Calendly for scheduling and Amazon for book purchases. These
              services have their own privacy policies and we encourage you to
              review them. MEditation TIME is not responsible for the
              privacy practices of external websites.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-xl font-medium">Liability Limitations</h2>
            <p className="text-muted-foreground leading-relaxed">
              The business does not endorse specific treatments, products, or
              healthcare providers and assumes no liability for advice, treatment,
              or services obtained through the website. Energy healing and
              meditation services are complementary practices and should not
              replace conventional medical care.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-xl font-medium">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions or concerns about this privacy policy, please contact
              us at meditationtimehome@gmail.com or call 602-754-6739. We are
              happy to address any concerns about how your information is handled.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
