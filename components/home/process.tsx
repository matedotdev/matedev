import { SectionKicker } from "@/components/section-kicker"

const steps = [
  {
    number: "I",
    title: "Join the newsletter",
    description:
      "Get monthly updates on meetups, conferences, and special activities before anyone else.",
  },
  {
    number: "II",
    title: "RSVP to an event",
    description: "Pick a city, pick a topic, and grab your spot. Most events are free to attend.",
  },
  {
    number: "III",
    title: "Show up and connect",
    description: "Bring a mate 🧉 or a coffee ☕. Meet the community. That's really it.",
  },
]

export function Process() {
  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-2 lg:gap-8">
        <div className="min-w-0">
          <SectionKicker light>How it works</SectionKicker>
          <h2 className="mt-6 max-w-md text-balance text-4xl leading-[1.05] font-medium tracking-tight sm:text-5xl">
            Three steps.
            <br />
            <span className="text-background/50">Endless mates.</span>
          </h2>

          <div className="mt-16">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-6 border-t border-background/15 py-7 first:border-t-0 first:pt-0"
              >
                <span className="font-mono text-sm text-background/40">{step.number}</span>
                <div>
                  <h3 className="text-xl font-medium tracking-tight">{step.title}</h3>
                  <p className="mt-2 max-w-sm text-background/60">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="min-w-0 lg:pt-24">
          <div className="min-w-0 overflow-hidden rounded-xl border border-background/15 bg-background/5 font-mono text-sm">
            <div className="flex items-center gap-2 border-b border-background/15 px-4 py-3">
              <span className="size-2.5 rounded-full bg-background/20" />
              <span className="size-2.5 rounded-full bg-background/20" />
              <span className="size-2.5 rounded-full bg-background/20" />
              <span className="ml-2 text-xs text-background/40">join.ts</span>
            </div>
            <pre className="max-w-full overflow-x-auto px-5 py-6 leading-6 text-background/80">
              <code>{`mate.dev.join({
  city: "auckland" | "melbourne" | "sf" | "buenos_aires",
  bring: "mate" | "coffee",
})

// Connected to the community`}</code>
            </pre>
            <div className="flex items-center gap-2 border-t border-background/15 px-4 py-3 text-xs text-background/50">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              Ready
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
