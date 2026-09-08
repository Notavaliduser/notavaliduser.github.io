import { useParams, Link } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";

function renderContent(content) {
  if (!content) return null;
  if (Array.isArray(content)) {
    return content.map((paragraph, i) => (
      <p key={i}>{paragraph}</p>
    ));
  }
  return <p>{content}</p>;
}

function renderTable(table) {
  if (!table) return null;
  return (
    <div className="case-study-table-wrapper">
      <table className="case-study-table">
        <thead>
          <tr>
            {table.headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderItems(items, numbered) {
  if (!items || items.length === 0) return null;
  if (numbered) {
    return (
      <ol className="case-study-numbered-list">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    );
  }
  return (
    <ul className="case-study-list">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function renderSubsection(sub, i) {
  return (
    <div key={i} className="case-study-subsection">
      <h3>{sub.title}</h3>
      {renderContent(sub.content)}
      {renderTable(sub.table)}
      {sub.afterTable && <p>{sub.afterTable}</p>}
      {renderItems(sub.items, sub.numbered)}
      {sub.subsections &&
        sub.subsections.map((nested, j) => (
          <div key={j} className="case-study-subsection case-study-subsection--nested">
            <h4>{nested.title}</h4>
            {renderContent(nested.content)}
            {renderTable(nested.table)}
          </div>
        ))}
    </div>
  );
}

function renderSection(section, index) {
  return (
    <section key={index} className="case-study-section">
      <h2>{section.title}</h2>
      {renderContent(section.content)}
      {renderTable(section.table)}
      {section.afterTable && <p>{section.afterTable}</p>}
      {renderItems(section.items, section.numbered)}
      {section.subsections &&
        section.subsections.map((sub, i) => renderSubsection(sub, i))}
    </section>
  );
}

export default function CaseStudyDetail() {
  const { id } = useParams();
  const study = caseStudies.find((s) => s.id === id);

  if (!study) {
    return (
      <main className="case-study-detail">
        <p>Case study not found.</p>
        <Link to="/work">Back to work</Link>
      </main>
    );
  }

  return (
    <main className="case-study-detail">
      <div className="case-study-header">
        <div className="case-study-meta">
          <span>{study.company}</span>
          <span>{study.timeframe}</span>
          <span>{study.role}</span>
        </div>
        <h1 className="case-study-title">{study.title}</h1>
        <p className="case-study-tagline">{study.tagline}</p>
        {study.summary && (
          <div className="case-study-summary">
            <ul>
              {study.summary.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {study.sections.map((section, i) => renderSection(section, i))}

      <Link to="/" className="case-study-back">
        <span aria-hidden="true">&larr;</span> Back to all work
      </Link>
    </main>
  );
}
