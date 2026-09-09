import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SectionKicker } from "@/components/section-kicker"

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[70vh] items-center border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionKicker>404</SectionKicker>
          <h1 className="mt-6 text-balance text-6xl leading-[0.95] font-medium tracking-tight text-foreground sm:text-7xl">
            Wrong mate.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            This page wandered off somewhere between Auckland and Buenos Aires. Let&apos;s get you
            back.
          </p>
          <Link
            href="/"
            className={cn(buttonVariants({ size: "lg" }), "mt-10 gap-2 rounded-full px-6 py-3 h-auto text-sm")}
          >
            Back to mate.dev
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
