import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function getInitialTheme() {
  const stored = localStorage.getItem("theme");
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isDetail = location.pathname.startsWith("/case-study");
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="header">
      <nav className="header-nav" aria-label="Main navigation">
        <div className="header-left">
          {isDetail && (
            <Link to="/" className="header-back">
              <span aria-hidden="true">&larr;</span> Back
            </Link>
          )}
          {!isHome && !isDetail && (
            <Link to="/" className="header-name">
              Rachna Ravi
            </Link>
          )}
        </div>
        <div className="header-links">
          <Link to="/" className={isHome ? "active" : ""}>
            Work
          </Link>
          <Link to="/photography" className={location.pathname === "/photography" ? "active" : ""}>
            Photography
          </Link>
          <Link to="/art" className={location.pathname === "/art" ? "active" : ""}>
            Art
          </Link>
          <button
            className="theme-toggle"
            onClick={() => setTheme(t => t === "light" ? "dark" : "light")}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.05 3.05l1.06 1.06M11.89 11.89l1.06 1.06M3.05 12.95l1.06-1.06M11.89 4.11l1.06-1.06M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M14 9.37A6.5 6.5 0 0 1 6.63 2 6.5 6.5 0 1 0 14 9.37Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
