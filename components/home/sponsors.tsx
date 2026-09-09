import Image from "next/image"
import { Coffee } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { SectionKicker } from "@/components/section-kicker"

export function Sponsors() {
  return (
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

        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm text-muted-foreground">
            Running community events for over a decade is a labor of love. If mate.dev has helped
            you, consider chipping in.
          </p>
          <a
            href="https://buymeacoffee.com/matedev"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2 rounded-full px-6 py-3 h-auto text-sm")}
          >
            <Coffee className="size-4" />
            buymeacoffee.com/matedev
          </a>
        </div>
      </div>
    </section>
  )
}
