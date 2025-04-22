import { PageLayout } from "@/components/page-layout"
import { Separator } from "@/components/ui/separator"

export default function AffirmativeAction() {
  return (
    <PageLayout
      title="Affirmative Action and the Modern Backlash"
      subtitle="The national debate over affirmative action highlights how political, legal, and rhetorical pressures shaped policy over time."
    >
      <div className="prose prose-slate dark:prose-invert max-w-none mb-8">
        <p>
          CMU's own archives reveal how these debates played out on campus in the 1980s and 1990s. The 2023 SCOTUS
          decision brought these tensions into sharp relief. By ruling race-conscious admissions unconstitutional, the
          court embraced a "colorblind" approach—one we critiqued in class as both historically inaccurate and
          linguistically misleading.
        </p>
      </div>

      <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 my-8">
        <h3 className="text-xl font-bold mb-4">Key Court Cases Timeline</h3>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 font-bold text-red-700 dark:text-red-400">1978</div>
            <div className="md:w-3/4">
              <h4 className="font-semibold">Regents of the University of California v. Bakke</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Struck down racial quotas but allowed race to be considered as one factor in admissions
              </p>
            </div>
          </div>
          <Separator />
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 font-bold text-red-700 dark:text-red-400">2003</div>
            <div className="md:w-3/4">
              <h4 className="font-semibold">Grutter v. Bollinger</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Upheld the University of Michigan Law School's race-conscious admissions policy, citing the educational
                benefits of diversity
              </p>
            </div>
          </div>
          <Separator />
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 font-bold text-red-700 dark:text-red-400">2023</div>
            <div className="md:w-3/4">
              <h4 className="font-semibold">Students for Fair Admissions v. Harvard</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Effectively ended race-conscious admissions, ruling that Harvard and UNC's policies violated the Equal
                Protection Clause
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h3>The Shifting Language at CMU</h3>

        <p>
          In the 1987 Tartan articles, students and faculty clashed over whether CMAP constituted "reverse racism." Our
          close readings of these texts showed how language framed CMAP students as exceptional yet suspect, both
          celebrated and questioned.
        </p>

        <p>
          Even internal CMU reports reveal a shift. In the 1995 Status Report, "affirmative action" appears less often;
          instead, terms like "diverse representation" and "broad outreach" dominate. This shift reflects the modern
          backlash—affirmative action reframed not as justice, but as threat to merit.
        </p>

        <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-lg p-6 my-8">
          <h3 className="text-xl font-bold mb-4 text-red-800 dark:text-red-300">Looking Forward</h3>
          <p className="text-slate-700 dark:text-slate-200">
            In the wake of these changes, CMU and similar institutions must rethink how to pursue equity. Possible paths
            include class-based admissions, community partnerships, and first-gen support programs—but as we discussed,
            these solutions must still grapple with race and power.
          </p>
          <p className="text-slate-700 dark:text-slate-200 mt-4">
            Affirmative action's undoing doesn't end the story—it reframes the challenge: how do we pursue
            race-conscious equity in a race-blind legal system?
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
