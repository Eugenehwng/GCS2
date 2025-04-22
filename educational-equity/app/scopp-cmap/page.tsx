import { PageLayout } from "@/components/page-layout"
import { ExpandableSection } from "@/components/expandable-section"
import { Tooltip } from "@/components/tooltip"
import Image from "next/image"

export default function ScoppCmap() {
  return (
    <PageLayout
      title="SCOPP and CMAP: Institutional Responses at CMU"
      subtitle="CMU's efforts to address educational inequity mirror national patterns, but with unique local textures."
    >
      <div className="prose prose-slate dark:prose-invert max-w-none mb-8">
        <p>
          SCOPP (Student Coalition Organizing for Political Progress) and CMAP (Carnegie Mellon Action Project) were
          pivotal attempts to respond to the Grand Challenge on campus—efforts we deeply analyzed through archival
          documents and linguistic framing.
        </p>

        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg my-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="relative w-full md:w-1/3 aspect-square">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-22%20at%201.04.02%E2%80%AFAM-LdKbRK9iko9r9VDNAKLE7llMRSgxW8.png"
                alt="SCOPP document showing program aims and objectives"
                fill
                className="object-contain rounded-md"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">The Origins of SCOPP</h3>
              <p>
                SCOPP, launched in the 1960s, responded to racial exclusion by explicitly targeting students labeled as
                having "latent talent"—a phrase we explored in class that reflects a deficit-based framing of Black
                students.
              </p>
              <p className="mt-2">
                The SCOPP Budget Proposal (1964) and Kurtz article reveal the rhetorical emphasis on "saving"
                disadvantaged youth rather than empowering them. The psychological support systems and summer bridge
                programs aimed to "fix" students rather than the system.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ExpandableSection title="SCOPP Budget Proposal (1964)" defaultExpanded>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p>
            The SCOPP Budget Proposal from 1964 reveals how the program was framed in terms of
            <Tooltip content="A term that implies students lack something that needs to be fixed, rather than recognizing their strengths and the systemic barriers they face.">
              deficit-based language
            </Tooltip>
            . Key phrases included:
          </p>
          <ul>
            <li>"Culturally deprived students"</li>
            <li>"Latent talent that needs to be developed"</li>
            <li>"Psychological adjustment to college life"</li>
          </ul>
          <p>
            These terms positioned Black students as problems to be solved rather than assets to the university
            community.
          </p>
        </div>
      </ExpandableSection>

      <ExpandableSection title="CMAP's Emergence After MLK's Assassination (1968)">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p>
            CMAP emerged after MLK's assassination in 1968, as student and faculty outrage pushed the university to act.
            The CMAP Reports (1970–71, 1976–78) and Tartan articles from 1987 show CMU's struggle to institutionalize
            equity.
          </p>
          <p>
            As we saw in our linguistic analysis assignments, CMAP students were both praised for "bridging gaps" and
            problematized as "segregated" within the university community.
          </p>
          <p>
            Guest speakers like Russ Crockett emphasized CMAP's importance as both academic and emotional
            infrastructure. Yet concerns over "separate housing" and persistent scrutiny in the media underscore the
            limits of inclusion without belonging.
          </p>
        </div>
      </ExpandableSection>

      <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-lg p-6 mt-8">
        <h3 className="text-xl font-bold mb-4 text-red-800 dark:text-red-300">Key Insight</h3>
        <p className="text-slate-700 dark:text-slate-200">
          These programs show that equity isn't just about access. It's about context, support, and shifting the
          narrative. CMU's story is one of tension between student-driven advocacy and institutional response, between
          structural reform and symbolic action.
        </p>
      </div>
    </PageLayout>
  )
}
