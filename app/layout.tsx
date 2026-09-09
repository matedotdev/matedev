import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Instrument_Sans, JetBrains_Mono } from "next/font/google"
import { cn } from "@/lib/utils"

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "mate.dev — Building communities, one mate at a time",
  description:
    "mate.dev is the community for builders across Auckland, Melbourne, San Francisco, and Buenos Aires — cloud native, AI, and full-stack meetups, conferences, and events.",
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  themeColor: "#f5f2ea",
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-background scroll-smooth",
        instrumentSans.variable,
        jetbrainsMono.variable,
      )}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
