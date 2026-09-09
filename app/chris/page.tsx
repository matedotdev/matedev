import type { Metadata } from "next"
import Image from "next/image"
import { ArrowUpRight, Coffee } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SectionKicker } from "@/components/section-kicker"

export const metadata: Metadata = {
  title: "Chris Mazur — mate.dev",
  description:
    "AAIF & CNCF Ambassador, community organizer, and software & DevOps engineer connecting the developer community across APAC & LATAM since 2010.",
}

const socials = [
  { label: "mate.dev", value: "mate.dev", href: "https://mate.dev" },
  { label: "LinkedIn", value: "cloud-native", href: "https://www.linkedin.com/in/cloud-native" },
  { label: "GitHub", value: "chaltenio", href: "https://github.com/chaltenio" },
  { label: "Discord", value: "connecta.dev", href: "https://discord.gg/xT9cMSy" },
  { label: "Twitter", value: "@chmazur", href: "https://twitter.com/chmazur" },
  { label: "chess.com", value: "chmazur", href: "https://www.chess.com/member/chmazur" },
]

const roles = [
  {
    text: "Founder & Organiser Agentic Engineering Day NZ",
    meta: "Auckland",
    href: "https://www.agenticengineering.day/",
  },
  {
    text: "AAIF Ambassador",
    meta: "Issued by The Linux Foundation, 2026",
    href: "https://www.credly.com/badges/96593dba-36fa-4fad-a814-e39c87ad72b2/public_url",
  },
  {
    text: "CNCF Ambassador",
    meta: "Issued by The Linux Foundation, 2023–2028",
    href: "https://www.credly.com/badges/dccc1596-15c1-474f-8d12-626c5b3b2534",
  },
  {
    text: "Founder & Organiser Cloud Native Summit",
    meta: "Wellington",
    href: "https://cloudnativesummit.co/nz",
  },
  {
    text: "Co-Founder & Event Community Lead, Agentics Day: MCP + Agents 2026",
    meta: "Issued by The Linux Foundation",
    href: "https://www.credly.com/earner/earned/badge/35ac4d87-345b-48f5-8693-56fcccecd0bf",
  },
  {
    text: "EnvoyCon NA 2025 Program Committee Member",
    meta: "Issued by The Linux Foundation",
    href: "https://www.credly.com/earner/earned/badge/708ca679-ab62-49f1-b6f5-4ec53a39c766",
  },
  {
    text: "Co-Chair KubeDay Australia 2024",
    meta: "Melbourne — Issued by The Linux Foundation",
    href: "https://www.credly.com/badges/f96c2033-ae20-4676-bbed-3921476dd7ec",
  },
  {
    text: "Organizer, Cloud Native Community Group 2024",
    meta: "Auckland — Issued by The Linux Foundation",
    href: "https://www.credly.com/badges/f8063808-d957-4f84-8e64-f3482b944aa2",
  },
  {
    text: "Co-Founder Argentina PHP User Group",
    meta: "Argentina — @grupophp",
    href: "https://x.com/grupophp",
  },
  {
    text: "Co-Founder & Co-Organiser PHP Conference Argentina",
    meta: "Buenos Aires — @phpconferencear",
    href: "https://twitter.com/phpconferencear",
  },
  {
    text: "Founder & Organiser PHP Conference New Zealand",
    meta: "Wellington — @phpconfnz",
    href: "https://twitter.com/phpconfnz",
  },
  {
    text: "Founder & Organiser ScaleConf New Zealand",
    meta: "Wellington — @sconfnz",
    href: "https://twitter.com/sconfnz",
  },
  {
    text: "Founder & Organiser Service Mesh Day",
    meta: "San Francisco & online",
    href: "https://servicemeshday.com",
  },
  {
    text: "Founder & Organiser Full-Stack Day",
    meta: "Auckland & online",
    href: "https://fullstackday.com",
  },
  {
    text: "Founder & Co-Organiser Full-Stack Dev New Zealand",
    meta: "Meetup",
    href: "https://www.meetup.com/Full-Stack-Dev-New-Zealand/",
  },
  {
    text: "Founder & Organiser Web Development Wellington",
    meta: "Meetup",
    href: "https://www.meetup.com/Wellington-Web-Dev/",
  },
  {
    text: "Organiser Web Dev Meetup Auckland",
    meta: "Meetup",
    href: "https://www.meetup.com/aucklandweb/",
  },
  {
    text: "Founder & Co-Organiser Devops Wellington",
    meta: "Meetup",
    href: "https://www.meetup.com/Wellington-DevOps-Group/",
  },
  {
    text: "Founder & Organiser Cloud Native & Platform Engineering Auckland",
    meta: "Meetup",
    href: "https://www.meetup.com/Cloud-Native-Auckland/",
  },
  {
    text: "Founder & Organiser Connecta.DEV",
    meta: "Online community",
    href: "https://connecta.dev",
  },
  {
    text: "Co-Organiser Golang Argentina",
    meta: "Meetup",
    href: "https://www.meetup.com/golang-argentina/",
  },
  {
    text: "Founder & Organiser Full-Stack Buenos Aires",
    meta: "Buenos Aires & online",
    href: "https://www.meetup.com/full-stack-engineering-buenos-aires",
  },
]

export default function ChrisPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <SectionKicker>About</SectionKicker>
            <h1 className="mt-6 text-balance text-6xl leading-[0.95] font-medium tracking-tight text-foreground sm:text-7xl">
              Chris Mazur
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              AAIF &amp; CNCF Ambassador · Community Organizer, Cloud-Native, AI &amp; Chess
              Enthusiast · Software &amp; DevOps Engineer · From Patagonia. 🇦🇷 🇳🇿 🧉 ♜
            </p>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-foreground/30"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">{social.label}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{social.value}</p>
                  </div>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <SectionKicker>Since 2010</SectionKicker>
            <h2 className="mt-6 max-w-2xl text-balance text-4xl leading-[1.05] font-medium tracking-tight text-foreground sm:text-5xl">
              Connecting the software
              <br />
              <span className="text-muted-foreground">community in APAC &amp; LATAM.</span>
            </h2>

            <ul className="mt-14">
              {roles.map((role) => (
                <li key={role.text} className="border-t border-border py-5 first:border-t-0">
                  <a
                    href={role.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline sm:gap-6"
                  >
                    <span className="text-foreground transition-colors group-hover:text-muted-foreground">
                      {role.text}
                    </span>
                    <span className="shrink-0 font-mono text-xs text-muted-foreground">
                      {role.meta}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <SectionKicker>Support</SectionKicker>
            <h2 className="mt-6 max-w-2xl text-balance text-4xl leading-[1.05] font-medium tracking-tight text-foreground sm:text-5xl">
              Companies supporting our projects
              <br />
              <span className="text-muted-foreground">over the past decade.</span>
            </h2>

            <div className="mt-14 rounded-2xl border border-border bg-card p-8 sm:p-10">
              <Image
                src="/sponsors-mate-dev.png"
                alt="Companies that have been supporting mate.dev's communities and events over the past decade"
                width={800}
                height={400}
                className="h-auto w-full max-w-2xl"
              />
            </div>

            <a
              href="https://buymeacoffee.com/matedev"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "mt-8 gap-2 rounded-full px-6 py-3 h-auto text-sm",
              )}
            >
              <Coffee className="size-4" />
              Support my project: buymeacoffee.com/matedev
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
