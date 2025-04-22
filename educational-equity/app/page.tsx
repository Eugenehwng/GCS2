import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="container mx-auto py-8 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-2">Educational Equity</h1>
        <h2 className="text-2xl md:text-3xl font-medium text-slate-700 mb-8">
          A Visual Journey Through U.S. and CMU History
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mb-8">
          Exploring the complex, evolving issue of educational equity in the United States, with a particular focus on
          how these broader systemic trends are reflected at Carnegie Mellon University.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-red-700 hover:bg-red-800">
            <Link href="/historical-timeline">
              Begin Exploring <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/about">About This Project</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SectionCard
            number="01"
            title="Historical Timeline"
            description="Explore key moments that shaped access to higher education in the U.S."
            link="/historical-timeline"
          />
          <SectionCard
            number="02"
            title="SCOPP and CMAP"
            description="CMU's institutional responses to educational inequity over time."
            link="/scopp-cmap"
          />
          <SectionCard
            number="03"
            title="Defining Equal Opportunity"
            description="How the meaning of equality has shifted based on context and language."
            link="/equal-opportunity"
          />
          <SectionCard
            number="04"
            title="Affirmative Action"
            description="The evolution and modern backlash against race-conscious admissions."
            link="/affirmative-action"
          />
          <SectionCard
            number="05"
            title="Language of Equity"
            description="The shift from deficit-based to asset-based framing in education."
            link="/language-of-equity"
          />
          <SectionCard
            number="06"
            title="Looking Forward"
            description="What's next for educational access and equity at CMU and beyond."
            link="/looking-forward"
          />
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="text-xl font-bold mb-2">Educational Equity at CMU</h2>
              <p className="text-slate-300">A visual website exploring the evolution of educational equity</p>
            </div>
            <div className="mt-6 md:mt-0">
              <p className="text-slate-300">© 2025 Eugene Hwang</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface SectionCardProps {
  number: string
  title: string
  description: string
  link: string
  className?: string
}

function SectionCard({ number, title, description, link, className }: SectionCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md ${className}`}
    >
      <span className="absolute -top-2 -left-2 text-9xl font-bold text-slate-100 select-none">{number}</span>
      <div className="relative">
        <h3 className="text-xl font-bold mb-2 text-slate-900">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <Button asChild variant="ghost" className="group-hover:text-red-700 group-hover:bg-red-50 transition-colors">
          <Link href={link}>
            Explore <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
