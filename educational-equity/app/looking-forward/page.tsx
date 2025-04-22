import { PageLayout } from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function LookingForward() {
  return (
    <PageLayout
      title="Looking Forward: What's Next for Educational Access?"
      subtitle="Our course began with a Grand Challenge—and we end by imagining next steps."
    >
      <div className="prose prose-slate dark:prose-invert max-w-none mb-8">
        <p>
          As panelists from LEAP, Dietrich Voices, and Arts Greenhouse emphasized, equity today must be proactive,
          structural, and student-informed. The old tools—affirmative action, summer bridge programs, access
          statements—can no longer do the work alone.
        </p>

        <p>
          CMU's next chapter must integrate insights from its own past. SCOPP and CMAP were imperfect, but they were
          bold. They acted on a belief in institutional responsibility.
        </p>
      </div>

      <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-8 my-8">
        <h3 className="text-2xl font-bold mb-6 text-red-800 dark:text-red-300">Future Solutions</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white dark:bg-slate-800 border-0">
            <CardContent className="p-6">
              <h4 className="text-lg font-bold mb-4">Holistic Admissions</h4>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Prioritizing lived experience and demonstrated resilience over standardized metrics alone. This approach
                recognizes the context of achievement and values diverse forms of excellence.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-red-600 shrink-0 mt-0.5" />
                  <span>Consider community involvement and leadership</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-red-600 shrink-0 mt-0.5" />
                  <span>Value work experience and family responsibilities</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-red-600 shrink-0 mt-0.5" />
                  <span>Recognize achievement in context of opportunity</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800 border-0">
            <CardContent className="p-6">
              <h4 className="text-lg font-bold mb-4">First-Gen Mentorship Pipelines</h4>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Creating structured support systems that connect first-generation students with peers, faculty, and
                alumni who share similar backgrounds and can provide guidance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-red-600 shrink-0 mt-0.5" />
                  <span>Peer-to-peer mentoring programs</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-red-600 shrink-0 mt-0.5" />
                  <span>Faculty mentorship initiatives</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-red-600 shrink-0 mt-0.5" />
                  <span>Alumni connection networks</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800 border-0">
            <CardContent className="p-6">
              <h4 className="text-lg font-bold mb-4">Curricular Reform</h4>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Redesigning course content and teaching methods to reflect diverse epistemologies and learning styles,
                making education more accessible and relevant to all students.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-red-600 shrink-0 mt-0.5" />
                  <span>Inclusive course materials and examples</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-red-600 shrink-0 mt-0.5" />
                  <span>Multiple assessment methods</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-red-600 shrink-0 mt-0.5" />
                  <span>Collaborative learning approaches</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-slate-800 border-0">
            <CardContent className="p-6">
              <h4 className="text-lg font-bold mb-4">Peer-Embedded Support Networks</h4>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Programs like LEAP that integrate academic support with community building, recognizing that
                relationships are central to student success and persistence.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-red-600 shrink-0 mt-0.5" />
                  <span>Learning communities by interest or background</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-red-600 shrink-0 mt-0.5" />
                  <span>Peer-led supplemental instruction</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 mr-2 text-red-600 shrink-0 mt-0.5" />
                  <span>Identity-based student organizations with faculty support</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p>
          As Connections Are Everything reminds us, the most important variable in student success isn't GPA—it's
          relationships. Moving forward, CMU must invest not just in programs, but in people.
        </p>

        <p>
          And we must all ask: What language will we use to describe equity in 10 years? Who will be included in that
          conversation?
        </p>

        <blockquote className="border-l-4 border-red-600 pl-4 italic">
          The answers are still unwritten—and that's where your story, and mine, begins.
        </blockquote>
      </div>
    </PageLayout>
  )
}
