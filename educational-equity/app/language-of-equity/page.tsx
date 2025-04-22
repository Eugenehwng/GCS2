import { PageLayout } from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function LanguageOfEquity() {
  return (
    <PageLayout
      title="Language of Equity: From Deficit to Asset Framing"
      subtitle="Language is not just descriptive—it's constitutive. How we talk about students shapes how we treat them."
    >
      <div className="prose prose-slate dark:prose-invert max-w-none mb-8">
        <p>
          This section traces the shift from deficit-based framing—common in early SCOPP documents—to asset-based
          framing, as discussed in course readings and guest talks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        <Card className="bg-slate-100 dark:bg-slate-800 border-0">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 text-red-700 dark:text-red-400">Deficit Framing</h3>
            <p className="mb-4">
              Deficit framing appears in terms like "underprepared," "disadvantaged," and "high-risk." These labels,
              found throughout the Blacker Report and 1960s CMU memos, imply lack—and often carry connotations of blame
              or burden. Students are positioned as problems to solve.
            </p>
            <div className="bg-white dark:bg-slate-900 rounded-lg p-4 mt-4">
              <h4 className="font-semibold mb-2">Examples from CMU Archives:</h4>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li>"Culturally deprived students need remediation"</li>
                <li>"Disadvantaged youth lack the necessary skills"</li>
                <li>"High-risk students require intensive intervention"</li>
                <li>"Underprepared students must overcome deficiencies"</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-red-50 dark:bg-red-900/20 border-0">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 text-red-700 dark:text-red-400">Asset Framing</h3>
            <p className="mb-4">
              Asset framing—influenced by thinkers like Trabian Shorters—focuses on strengths: resilience, bilingualism,
              community knowledge. As Alvarez and Crockett both noted, CMAP participants often served as peer mentors
              and campus leaders, despite being institutionally under-supported.
            </p>
            <div className="bg-white dark:bg-slate-900 rounded-lg p-4 mt-4">
              <h4 className="font-semibold mb-2">Alternative Language:</h4>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li>"Students with diverse cultural knowledge and perspectives"</li>
                <li>"First-generation college students bring unique resilience"</li>
                <li>"Multilingual learners with communication strengths"</li>
                <li>"Students with community leadership experience"</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg border p-6 my-8">
        <h3 className="text-xl font-bold mb-4">The Evolution of Language at CMU</h3>

        <div className="space-y-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 font-bold text-red-700 dark:text-red-400">1960s</div>
            <div className="md:w-3/4">
              <p className="text-slate-600 dark:text-slate-300">
                "SCOPP aims to help culturally deprived students overcome their disadvantages through remedial education
                and psychological support."
              </p>
            </div>
          </div>
          <Separator />
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 font-bold text-red-700 dark:text-red-400">1970s-80s</div>
            <div className="md:w-3/4">
              <p className="text-slate-600 dark:text-slate-300">
                "CMAP provides educational opportunities for minority students who show potential despite educational
                disadvantages."
              </p>
            </div>
          </div>
          <Separator />
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 font-bold text-red-700 dark:text-red-400">1990s</div>
            <div className="md:w-3/4">
              <p className="text-slate-600 dark:text-slate-300">
                "The university seeks to create a diverse learning environment that benefits all students through
                exposure to different perspectives."
              </p>
            </div>
          </div>
          <Separator />
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 font-bold text-red-700 dark:text-red-400">2000s-Present</div>
            <div className="md:w-3/4">
              <p className="text-slate-600 dark:text-slate-300">
                "CMU values the unique strengths, perspectives, and experiences that first-generation and
                underrepresented students bring to our campus community."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p>
          Even well-meaning policies can reinforce deficits if not critically designed. For example, tutoring framed as
          "remedial help" may stigmatize, while learning communities framed as "collaborative success" affirm student
          agency.
        </p>

        <p>
          In our analysis of CMU's evolving language—from CMAP acceptance letters to modern retention reports—we saw
          this shift in real time. But gaps remain.
        </p>

        <blockquote className="border-l-4 border-red-600 pl-4 italic">
          True asset framing means redesigning structures around student strengths—not just changing how we talk, but
          how we listen, support, and share power.
        </blockquote>
      </div>
    </PageLayout>
  )
}
