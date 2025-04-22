import type { ReactNode } from "react"
import { SiteHeader } from "@/components/site-header"

interface PageLayoutProps {
  children: ReactNode
  title: string
  subtitle?: string
  className?: string
}

export function PageLayout({ children, title, subtitle, className = "" }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <div className="bg-red-700 text-white py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-xl text-red-100 max-w-3xl">{subtitle}</p>}
        </div>
      </div>
      <main className={`flex-1 py-12 px-4 ${className}`}>
        <div className="container mx-auto max-w-4xl">{children}</div>
      </main>
      <footer className="bg-slate-900 text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="text-lg font-bold mb-2">Educational Equity at CMU</h2>
              <p className="text-slate-300 text-sm">A visual website exploring the evolution of educational equity</p>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-slate-300 text-sm">© 2025 Eugene Hwang</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
