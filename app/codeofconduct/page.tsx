import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SectionKicker } from "@/components/section-kicker"

export const metadata: Metadata = {
  title: "Code of Conduct — mate.dev",
  description: "The anti-harassment policy for all mate.dev community events.",
}

const sections = [
  {
    title: "Participant behavior",
    body: "Harassment includes, but is not limited to, offensive verbal comments related to gender, race, sexual orientation, disability, religion, or any other protected classification directed toward an individual or group. Intimidation, threats, stalking, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome attention will also be considered harassment. Similarly, sexual, racist, derogatory, threatening, or other inappropriate language and imagery are not appropriate for any conference venue, including sessions.",
  },
  {
    title: "Recourse",
    body: "If a participant violates this Anti-Harassment Policy, the event organizers may take any action they deem appropriate, including warning the offender or expelling the offender from this and/or future events organized by them. No refunds will be granted to attendees expelled from the event due to violations of this policy.",
  },
  {
    title: "Reporting",
    body: "If you are being harassed, witness harassment, or have any other concerns, please contact your host. If anyone is in physical danger or requires an immediate response, they are encouraged to notify appropriate law enforcement first. If you have any questions about this Anti-Harassment Policy, please contact ch@mate.dev.",
  },
]

export default function CodeOfConductPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <SectionKicker>Policy</SectionKicker>
            <h1 className="mt-6 text-balance text-5xl leading-[1.02] font-medium tracking-tight text-foreground sm:text-6xl">
              Code of conduct
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We encourage everyone to assist in creating a welcoming and safe environment.
            </p>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-3xl px-6 py-20">
            <div className="border-t border-border pt-10">
              <p className="leading-relaxed text-foreground">
                We are dedicated to providing a harassment-free experience for everyone,
                regardless of gender, race, sexual orientation, disability, religion, or any
                other protected classification.
              </p>
              <p className="mt-4 leading-relaxed text-foreground">
                Everyone attending this event is expected to follow this Anti-Harassment Policy.
                This includes but is not limited to: attendees, speakers, partners, exhibitors,
                volunteers, and staff. All attendees are expected to follow the Anti-Harassment
                Policy in any situation in which they are interacting with one another during
                this event, on or offsite. Harassment in any form will not be tolerated.
              </p>
            </div>

            {sections.map((section) => (
              <div key={section.title} className="mt-14 border-t border-border pt-10">
                <h2 className="text-2xl font-medium tracking-tight text-foreground">
                  {section.title}
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{section.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
