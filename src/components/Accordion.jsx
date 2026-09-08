import { useState, useId } from "react";

export default function Accordion({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const panelId = `accordion-panel-${id}`;

  return (
    <section className="accordion" aria-label={title}>
      <h2 className="accordion-heading">
        <button
          className="accordion-header"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={panelId}
        >
          <span className="accordion-title">{title}</span>
          <svg
            className={`accordion-chevron ${open ? "accordion-chevron--open" : ""}`}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </h2>
      {open && (
        <div id={panelId} className="accordion-body" role="region" aria-label={title}>
          {children}
        </div>
      )}
    </section>
  );
}
