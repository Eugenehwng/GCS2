import type { ReactNode } from "react"

interface TimelineEventProps {
  year: string
  title: string
  children: ReactNode
  highlight?: boolean
}

export function TimelineEvent({ year, title, children, highlight = false }: TimelineEventProps) {
  return (
    <div className="relative pl-8 pb-12 border-l border-slate-200 dark:border-slate-700">
      <div
        className={`absolute left-0 top-0 -translate-x-1/2 w-6 h-6 rounded-full ${
          highlight ? "bg-red-600 border-4 border-red-100 dark:border-red-900" : "bg-slate-300 dark:bg-slate-600"
        }`}
      />
      <div className="mb-1 text-sm font-semibold text-red-600 dark:text-red-400">{year}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="text-slate-600 dark:text-slate-300">{children}</div>
    </div>
  )
}
