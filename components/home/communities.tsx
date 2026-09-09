import { SectionKicker } from "@/components/section-kicker"

const communities = [
  {
    number: "01",
    name: "Agentic Engineering Day NZ",
    description: "Auckland's gathering for agentic AI builders and infrastructure engineers.",
  },
  {
    number: "02",
    name: "Cloud Native AI Summit",
    description: "Where cloud native meets applied AI, for platform and ML teams.",
  },
  {
    number: "03",
    name: "Service Mesh Day",
    description: "San Francisco's dedicated day for service mesh practitioners, online too.",
  },
  {
    number: "04",
    name: "ScaleConf NZ",
    description: "Wellington's conference on scaling systems, teams, and organizations.",
  },
  {
    number: "05",
    name: "Full-Stack Day",
    description: "Auckland & online, for developers who own the whole stack end to end.",
  },
  {
    number: "06",
    name: "connecta.dev",
    description: "Our always-on online community for builders across every time zone.",
  },
]

export function Communities() {
  return (
    <section id="communities" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionKicker>Communities</SectionKicker>
        <h2 className="mt-6 max-w-2xl text-balance text-4xl leading-[1.05] font-medium tracking-tight text-foreground sm:text-5xl">
          Communities we run.
          <br />
          <span className="text-muted-foreground">Not just events we attend.</span>
        </h2>

        <div className="mt-16">
          {communities.map((item) => (
            <div
              key={item.number}
              className="grid grid-cols-[auto_1fr] items-start gap-x-6 gap-y-2 border-t border-border py-8 sm:grid-cols-[3rem_1fr_2fr]"
            >
              <span className="font-mono text-xs text-muted-foreground">{item.number}</span>
              <h3 className="text-2xl font-medium tracking-tight text-foreground sm:col-start-2">
                {item.name}
              </h3>
              <p className="col-span-2 max-w-md text-muted-foreground sm:col-span-1 sm:col-start-3">
                {item.description}
              </p>
            </div>
          ))}
          <div className="border-t border-border py-8">
            <p className="font-mono text-xs text-muted-foreground uppercase">
              Plus PHP Conf Argentina &amp; NZ, and tech meetups across all four cities — and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
