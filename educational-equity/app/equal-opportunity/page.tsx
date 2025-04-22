import { PageLayout } from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function EqualOpportunity() {
  return (
    <PageLayout
      title="Challenges in Defining 'Equal Opportunity'"
      subtitle="'Equal opportunity' is often invoked as a self-evident goal—but its meaning is shaped by time, context, and language in use."
    >
      <div className="prose prose-slate dark:prose-invert max-w-none mb-8">
        <p>
          From SCOPP documents to the 1995 CMU Minority Status Report, we saw how definitions of fairness shifted based
          on institutional goals and political pressures.
        </p>

        <p>
          In the Blacker and Blackmer Reports, for example, opportunity was defined in terms of correcting psychological
          and academic deficits. Language like "culturally deprived" and "educationally disadvantaged" frames inequality
          as an individual failure, not a systemic one—a key insight from our linguistic framing exercises.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Early Definitions (1960s-1970s)</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 mr-2 text-red-600 shrink-0 mt-0.5" />
                <span>
                  Focus on <strong>correcting deficits</strong> in minority students
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 mr-2 text-red-600 shrink-0 mt-0.5" />
                <span>
                  Emphasis on <strong>psychological adjustment</strong> to college
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 mr-2 text-red-600 shrink-0 mt-0.5" />
                <span>
                  Language of <strong>"cultural deprivation"</strong> and "disadvantage"
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 mr-2 text-red-600 shrink-0 mt-0.5" />
                <span>
                  Individual <strong>remediation</strong> rather than systemic change
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Later Shifts (1980s-1990s)</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 mr-2 text-red-600 shrink-0 mt-0.5" />
                <span>
                  Terms like <strong>"diversity"</strong> replaced "racial justice"
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 mr-2 text-red-600 shrink-0 mt-0.5" />
                <span>
                  Focus on <strong>institutional benefits</strong> of diverse perspectives
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 mr-2 text-red-600 shrink-0 mt-0.5" />
                <span>
                  Language of <strong>"inclusion"</strong> and "representation"
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 mr-2 text-red-600 shrink-0 mt-0.5" />
                <span>
                  Shift toward <strong>colorblind rhetoric</strong> in policy documents
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p>
          Later, terms like "diversity" replaced "racial justice" as universities responded to legal and public
          pressure. As Urofsky noted, this move made affirmative action more defensible in court—but also weakened its
          transformative intent.
        </p>

        <p>
          The 1993 CMU Affirmative Action History shows how the university shifted from direct appeals to racial justice
          toward vague commitments to "diversity of perspectives."
        </p>

        <blockquote className="border-l-4 border-red-600 pl-4 italic">
          Even today, as guest speaker Miguel Alvarez discussed, equal opportunity is often confused with equal
          treatment. But treating everyone the same ignores structural differences in preparation, resources, and lived
          experience.
        </blockquote>

        <h3>What Does Real Equity Require?</h3>

        <p>
          In class, we asked: What does real equity require? Not just access, but tailored support. Not just diversity
          in numbers, but inclusion in structure.
        </p>

        <p>"Equal opportunity" remains a contested phrase—but that contestation is where real reform begins.</p>
      </div>
    </PageLayout>
  )
}
