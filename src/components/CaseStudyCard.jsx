import { Link } from "react-router-dom";

export default function CaseStudyCard({ study }) {
  return (
    <Link to={`/case-study/${study.id}`} className="case-study-card case-study-card--compact">
      <div className="case-study-card-content">
        <div className="case-study-card-meta">
          <span>{study.company}</span>
          <span>{study.timeframe}</span>
        </div>
        <h3 className="case-study-card-title">{study.title}</h3>
        {study.metric && (
          <p className="case-study-card-metric">{study.metric}</p>
        )}
        {study.tagline && (
          <p className="case-study-card-desc">{study.tagline}</p>
        )}
        <span className="case-study-card-cta">Read case study <span aria-hidden="true">&rarr;</span></span>
      </div>
    </Link>
  );
}
