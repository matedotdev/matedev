import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { SectionKicker } from "@/components/section-kicker"

const stats = [
  { value: "2010", label: "building communities since" },
  { value: "20+", label: "meetups & conferences founded" },
  { value: "4", label: "cities: AKL · MEL · SF · BA" },
  { value: "3", label: "continents connected" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, color-mix(in oklch, var(--foreground), transparent 88%) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-24 sm:pt-20 sm:pb-32">
        <SectionKicker>The community for builders</SectionKicker>

        <h1 className="mt-6 max-w-4xl text-balance text-5xl leading-[0.95] font-medium tracking-tight text-foreground sm:text-7xl md:text-8xl">
          Building
          <br />
          communities.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          From Auckland to Buenos Aires — cloud native, AI, and full-stack meetups, conferences,
          and events for developers who show up. Grab a mate 🧉 or a coffee ☕, and join us.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="https://luma.com/event/evt-l1xB07TiRiphndf"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "gap-2 rounded-full px-6 py-3 h-auto text-sm")}
          >
            Register for next event
            <ArrowRight className="size-4" />
          </a>
          <Link
            href="#newsletter"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full px-6 py-3 h-auto text-sm",
            )}
          >
            Join the newsletter
          </Link>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-border pt-10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
                {stat.value}
              </dd>
              <p className="mt-1 font-mono text-xs text-muted-foreground uppercase">{stat.label}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
