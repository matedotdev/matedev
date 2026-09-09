import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Quote() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="max-w-3xl text-balance text-3xl leading-snug font-medium tracking-tight text-foreground sm:text-4xl">
          &ldquo;Building communities, one mate 🧉 (or a coffee ☕) at a time.&rdquo;
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <div>
            <p className="text-sm font-medium text-foreground">Chris Mazur</p>
            <p className="text-sm text-muted-foreground">Founder, mate.dev</p>
          </div>
          <Link
            href="/chris"
            className="ml-auto flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Meet Chris
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
