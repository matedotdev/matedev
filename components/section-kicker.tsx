import { cn } from "@/lib/utils"

export function SectionKicker({
  children,
  className,
  light = false,
}: {
  children: React.ReactNode
  className?: string
  light?: boolean
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className={cn("h-px w-6", light ? "bg-background/40" : "bg-border")} />
      <span
        className={cn(
          "font-mono text-xs tracking-wide uppercase",
          light ? "text-background/60" : "text-muted-foreground",
        )}
      >
        {children}
      </span>
    </div>
  )
}
