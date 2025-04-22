import { PageLayout } from "@/components/page-layout"

export default function About() {
  return (
    <PageLayout
      title="About This Project"
      subtitle="A visual exploration of educational equity in the U.S. and at Carnegie Mellon University"
    >
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <h2>Project Overview</h2>
        <p>
          This website was created as an unessay project that explores the complex, evolving issue of educational equity
          in the U.S., with a particular focus on how these broader systemic trends are reflected at Carnegie Mellon
          University.
        </p>

        <p>
          The project addresses the "grand challenge" through a historical and linguistic lens, while using the digital
          medium to communicate information engagingly.
        </p>

        <h2>Sections</h2>
        <p>
          The website is divided into seven interactive, visually distinct sections that each address a subtheme of
          educational equity:
        </p>

        <ol>
          <li>
            <strong>Historical Timeline of U.S. Higher Education Access</strong> - Outlines key historical moments that
            shaped access to higher education
          </li>
          <li>
            <strong>SCOPP and CMAP: Institutional Responses at CMU</strong> - Explores CMU's efforts to address
            educational inequity
          </li>
          <li>
            <strong>Challenges in Defining "Equal Opportunity"</strong> - Examines how definitions of fairness have
            shifted over time
          </li>
          <li>
            <strong>Affirmative Action and the Modern Backlash</strong> - Analyzes the national debate over affirmative
            action
          </li>
          <li>
            <strong>Data Deep Dive: CMU's Retention and Demographic Shifts</strong> - Examines data trends on
            enrollment, retention, and graduation
          </li>
          <li>
            <strong>Language of Equity: From "Deficit" to "Asset" Framing</strong> - Traces the shift in how we talk
            about students
          </li>
          <li>
            <strong>Looking Forward: What's Next for Educational Access?</strong> - Imagines future solutions for
            educational equity
          </li>
        </ol>

        <h2>Core Topics and Questions</h2>
        <p>This project draws heavily on topics including:</p>

        <ul>
          <li>SCOPP and CMAP archival materials</li>
          <li>Statements by Dr. Marion Oliver (1978)</li>
          <li>Class discussions on intersectionality and shifting definitions of equity</li>
          <li>Course discussions of the "deficit vs. asset" framing</li>
        </ul>

        <p>Key guiding questions include:</p>

        <ul>
          <li>How has the definition of educational equity evolved over time?</li>
          <li>In what ways has CMU mirrored or diverged from national trends?</li>
          <li>How does language shape our perception of who belongs in higher ed?</li>
          <li>What systemic and institutional forces contribute to inequity?</li>
          <li>What narratives are missing from dominant data presentations?</li>
        </ul>

        <h2>About the Author</h2>
        <p>
          This project was created by Eugene Hwang as an unessay project for a course on educational equity. The website
          format was chosen to allow for dynamic layering of complex information that wouldn't be possible in a static
          format like a paper or poster.
        </p>

        <p>
          The site offers an intuitive user experience: visitors can scroll or click through topics at their own pace,
          making the project more accessible. This medium also allows for the implementation of design principles – such
          as layout hierarchy, color schemes, and minimalist visual language – that can amplify the emotional and
          rhetorical impact of the content.
        </p>
      </div>
    </PageLayout>
  )
}
