export default function About() {
  return (
    <section className="section" aria-label="About">
      <h2 className="section-heading">About</h2>
      <div className="about-content">
        <p>
          8+ years shipping products across e-commerce, food, grocery, and
          retail supply chain — from zero-to-market builds to platforms serving
          millions. MBA from IIM Kozhikode, management rotations at Vodafone
          India before moving into product.
        </p>
        <h3 className="about-heading">How I work</h3>
        <div className="about-principles">
          <div className="about-principle">
            <strong>Constraints are design inputs.</strong>
            <span>
              {" "}Legal, infrastructure, timelines — I don't treat these as
              blockers to escalate. They shape the product. Some of my best
              decisions came from working within a constraint everyone else was
              trying to remove.
            </span>
          </div>
          <div className="about-principle">
            <strong>Ship before the foundation is perfect.</strong>
            <span>
              {" "}If the window matters more than the polish, I ship.
              Deliberate debt, scoped and paid down — not ignored. I'd rather
              fix real problems from real users than hypothetical ones in a
              planning doc.
            </span>
          </div>
          <div className="about-principle">
            <strong>Say what didn't work before anyone asks.</strong>
            <span>
              {" "}Every case study here has a section on what went wrong — not
              as setup for a lesson learned, but because the interesting part of
              a product decision is usually what you'd change. If you can't name
              your mistakes specifically, you probably haven't examined them.
            </span>
          </div>
          <div className="about-principle">
            <strong>Reverse course when the data says to.</strong>
            <span>
              {" "}I've killed committed launches and pivoted strategies
              mid-flight when the numbers told a different story than the plan.
              The hard part isn't reading the signal — it's telling stakeholders
              their assumptions were wrong.
            </span>
          </div>
          <div className="about-principle">
            <strong>Leave the system better than the project.</strong>
            <span>
              {" "}A survey methodology I introduced for one squad was adopted
              across four brands. A tooling fix for one feature became
              infrastructure other teams built on. A junior PM I mentored
              shipped the programme and was promoted. I think about what
              persists after the project ends — the capability, the method, the
              people.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
