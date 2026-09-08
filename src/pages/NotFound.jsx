import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">This page doesn't exist.</p>
      <Link to="/" className="not-found-link">
        <span aria-hidden="true">&larr;</span> Back to work
      </Link>
    </main>
  );
}
