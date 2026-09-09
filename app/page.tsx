import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/home/hero"
import { Communities } from "@/components/home/communities"
import { Process } from "@/components/home/process"
import { NextEvent } from "@/components/home/next-event"
import { NewsletterSection } from "@/components/home/newsletter-section"
import { Sponsors } from "@/components/home/sponsors"
import { Quote } from "@/components/home/quote"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Communities />
        <Process />
        <NextEvent />
        <NewsletterSection />
        <Sponsors />
        <Quote />
      </main>
      <SiteFooter />
    </>
  )
}
