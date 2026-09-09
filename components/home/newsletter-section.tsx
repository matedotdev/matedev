import { SectionKicker } from "@/components/section-kicker"
import { NewsletterForm } from "@/components/newsletter-form"

export function NewsletterSection() {
  return (
    <section id="newsletter" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SectionKicker>Newsletter</SectionKicker>
            <h2 className="mt-6 text-balance text-4xl leading-[1.05] font-medium tracking-tight text-foreground sm:text-5xl">
              Stay in the loop.
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Follow our progress. Join our newsletter to receive monthly updates about tech
              meetups, conferences, and special activities.
            </p>
          </div>

          <div className="lg:pl-8">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  )
}
