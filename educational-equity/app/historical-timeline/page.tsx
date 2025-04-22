import { PageLayout } from "@/components/page-layout"
import { TimelineEvent } from "@/components/timeline-event"
import { Tooltip } from "@/components/tooltip"

export default function HistoricalTimeline() {
  return (
    <PageLayout
      title="Historical Timeline of U.S. Higher Education Access"
      subtitle="The evolution of higher education in the U.S. is marked by widening access—and persistent inequality."
    >
      <div className="prose prose-slate dark:prose-invert max-w-none mb-12">
        <p>
          This section outlines key historical moments that shaped access to higher education, emphasizing the selective
          expansion of opportunity and the ways institutional language masked exclusion.
        </p>
      </div>

      <div className="mt-12">
        <TimelineEvent year="1862" title="First Morrill Land-Grant Act" highlight>
          <p>
            Democratized college access for white, working-class men but required a
            <Tooltip content="A legal doctrine that justified racial segregation by claiming that separate facilities for different races were equal.">
              "separate but equal"
            </Tooltip>
            solution for Black students—thus founding HBCUs. Though these acts expanded opportunity, they encoded racial
            segregation into the higher ed system.
          </p>
        </TimelineEvent>

        <TimelineEvent year="1890" title="Second Morrill Land-Grant Act">
          <p>
            Extended the land-grant program but formalized segregation by requiring states to either admit Black
            students to existing colleges or establish separate institutions. This led to the creation of many
            Historically Black Colleges and Universities (HBCUs).
          </p>
        </TimelineEvent>

        <TimelineEvent year="1944" title="GI Bill" highlight>
          <p>
            Significantly increased college attendance, but as we saw in class discussions and "Connections Are
            Everything," access was shaped by geography, race, and who controlled distribution of benefits. Black
            veterans were often denied access through local discrimination—revealing the gap between formal policy and
            lived reality.
          </p>
        </TimelineEvent>

        <TimelineEvent year="1954" title="Brown v. Board of Education" highlight>
          <p>
            Formally dismantled educational segregation but had limited impact on elite higher ed institutions. The
            ruling declared that "separate educational facilities are inherently unequal," but implementation was slow
            and often resisted.
          </p>
        </TimelineEvent>

        <TimelineEvent year="1960s-1970s" title="Emergence of Affirmative Action">
          <p>
            As the Urofsky chapters detail, affirmative action policies emerged in the 1960s–70s as a response to such
            inequities—yet these too sparked backlash that reframed equity as "preferential treatment." Language played
            a key role here. Terms like "merit," "colorblindness," and "equality of opportunity" were mobilized to
            defend the status quo.
          </p>
        </TimelineEvent>

        <TimelineEvent year="2023" title="SCOTUS Ruling Against Race-Conscious Admissions" highlight>
          <p>
            The Supreme Court ruled against race-conscious admissions policies at Harvard and the University of North
            Carolina, effectively ending affirmative action in college admissions. This ruling represents a significant
            shift in how educational equity is approached in the United States.
          </p>
        </TimelineEvent>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none mt-12">
        <p>
          Through this timeline, we see how historical change is not linear, and language is never neutral. Policy
          milestones mattered—but they were interpreted, contested, and reshaped by the institutions that adopted them.
        </p>
      </div>
    </PageLayout>
  )
}
