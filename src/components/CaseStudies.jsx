import { caseStudies } from "../data/caseStudies";
import CaseStudyCard from "./CaseStudyCard";

export default function CaseStudies() {
  const featured = caseStudies.filter((s) => !s.earlier);
  const earlier = caseStudies.filter((s) => s.earlier);

  return (
    <section className="section" aria-label="Selected Work">
      <h2 className="section-heading">Selected Work</h2>
      <div className="case-studies-grid">
        {featured.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>
      {earlier.length > 0 && (
        <>
          <h3 className="section-subheading">Earlier Work</h3>
          <div className="case-studies-grid case-studies-grid--earlier">
            {earlier.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
