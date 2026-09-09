import Link from "next/link"

const communityLinks = [
  { href: "/#communities", label: "Communities" },
  { href: "/#next-event", label: "Next event" },
  { href: "/#newsletter", label: "Newsletter" },
  { href: "/codeofconduct", label: "Code of conduct" },
]

const connectLinks = [
  { href: "https://www.linkedin.com/in/cloud-native/", label: "LinkedIn" },
  { href: "https://twitter.com/matedotdev", label: "Twitter" },
  { href: "https://github.com/chaltenio", label: "GitHub" },
  { href: "https://discord.gg/xT9cMSy", label: "Discord" },
]

const supportLinks = [
  { href: "/chris", label: "Contact Chris" },
  { href: "https://buymeacoffee.com/matedev", label: "Buy me a coffee" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-medium tracking-tight text-foreground">mate.dev</span>
              <span className="font-mono text-[10px] text-muted-foreground">TM</span>
            </div>
            <p className="mt-3 max-w-56 text-sm leading-relaxed text-muted-foreground">
              Building communities, one mate (or a coffee) at a time — since 2010.
            </p>
          </div>

          <FooterColumn title="Community" links={communityLinks} />
          <FooterColumn title="Connect" links={connectLinks} external />
          <FooterColumn title="Support" links={supportLinks} />
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <a
            href="https://www.linkedin.com/in/cloud-native/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-tight hover:text-foreground"
          >
            Auckland / Melbourne / San Francisco / Buenos Aires
          </a>
          <p className="font-mono text-xs">© {new Date().getFullYear()} mate.dev — all rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
  external = false,
}: {
  title: string
  links: { href: string; label: string }[]
  external?: boolean
}) {
  return (
    <div>
      <h3 className="font-mono text-xs tracking-wide text-muted-foreground uppercase">{title}</h3>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            {external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ) : (
              <Link href={link.href} className="text-sm text-foreground/80 transition-colors hover:text-foreground">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
