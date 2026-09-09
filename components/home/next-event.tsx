import { ArrowUpRight, Clock, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { SectionKicker } from "@/components/section-kicker"

const tags = [
  "Agentic Engineering Day NZ",
  "Cloud Native AI Summit",
  "Service Mesh Day",
  "ScaleConf NZ",
  "Full-Stack Day",
  "PHP Conf Argentina & NZ",
  "connecta.dev",
]

export function NextEvent() {
  return (
    <section id="next-event" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionKicker>Next event</SectionKicker>
        <h2 className="mt-6 max-w-2xl text-balance text-4xl leading-[1.05] font-medium tracking-tight text-foreground sm:text-5xl">
          Grab a mate.
          <br />
          <span className="text-muted-foreground">See you there.</span>
        </h2>

        <div className="mt-14 flex flex-col justify-between gap-10 rounded-2xl border border-border bg-card p-8 sm:p-10 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
              In-person event
            </p>
            <h3 className="mt-3 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Agentic Engineering &amp; Infra
            </h3>
            <p className="mt-2 text-lg text-muted-foreground">Auckland AI Builders</p>

            <div className="mt-6 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-6">
              <span className="flex items-center gap-2">
                <Clock className="size-4" />
                Tuesday, August 11 · 5:00 – 7:30 PM
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="size-4" />
                Auckland, New Zealand
              </span>
            </div>
          </div>

          <a
            href="https://luma.com/event/evt-l1xB07TiRiphndf"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "shrink-0 gap-2 rounded-full px-6 py-3 h-auto text-sm")}
          >
            Register on Luma
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
