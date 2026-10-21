import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="wrap sec ctr">
      <div className="nf">🥀</div>
      <h2>404 — Page not found</h2>
      <p>This page wilted. Let's get you back to the fresh stuff.</p>
      <Link to="/" className="btn dark">
        Go home
      </Link>
    </section>
  );
}
