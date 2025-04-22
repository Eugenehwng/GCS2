import type { ReactNode } from "react"

interface StatCardProps {
  title: string
  value: string
  description?: string
  icon?: ReactNode
  trend?: "up" | "down" | "neutral"
}

export function StatCard({ title, value, description, icon, trend }: StatCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg border p-6 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
          <h3 className="text-3xl font-bold mt-1 mb-2">{value}</h3>
          {description && <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p>}
        </div>
        {icon && <div className="text-slate-400">{icon}</div>}
      </div>
      {trend && (
        <div className="mt-4 flex items-center">
          {trend === "up" && <span className="text-green-600 text-sm font-medium">↑ Increasing</span>}
          {trend === "down" && <span className="text-red-600 text-sm font-medium">↓ Decreasing</span>}
          {trend === "neutral" && <span className="text-slate-600 text-sm font-medium">→ Stable</span>}
        </div>
      )}
    </div>
  )
}
