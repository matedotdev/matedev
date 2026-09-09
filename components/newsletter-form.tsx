"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import { cn } from "@/lib/utils"

type FormState = "idle" | "loading" | "success" | "error"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [state, setState] = useState<FormState>("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  async function subscribe(e: React.FormEvent) {
    e.preventDefault()
    setState("loading")
    setErrorMessage(null)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error ?? "Something went wrong.")
      }

      setState("success")
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.")
      setState("error")
    }
  }

  if (state === "success") {
    return (
      <div className="flex items-center gap-2 rounded-full border border-foreground/15 bg-card px-5 py-3 text-sm text-foreground">
        <Check className="size-4 shrink-0" />
        Thanks! I&apos;ll be in touch shortly :) — Chris Mazur.
      </div>
    )
  }

  return (
    <div>
      <form
        onSubmit={subscribe}
        className="flex flex-col gap-3 rounded-full border border-foreground/15 bg-card p-2 sm:flex-row sm:items-center"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full flex-1 rounded-full bg-transparent px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className={cn(
            "inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60",
          )}
        >
          {state === "loading" ? "Joining…" : "Join"}
          {state !== "loading" && <ArrowRight className="size-3.5" />}
        </button>
      </form>
      {state === "error" && errorMessage && (
        <p className="mt-3 text-sm text-destructive">{errorMessage}</p>
      )}
    </div>
  )
}
