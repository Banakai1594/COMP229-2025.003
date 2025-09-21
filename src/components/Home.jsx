import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="section">
      <h1>Welcome!</h1>
      <p>
        I’m Ali Mustafa, a software engineering student who builds simple, fast
        web apps and backend utilities for real coursework and side projects.
      </p>
      <p style={{marginTop:8}}>
        <strong>Mission:</strong> design practical tools with clean code and clear UX,
        learn continuously, and ship small improvements that make a real difference.
      </p>
      <div className="btnrow">
        <Link to="/about" className="btn primary">About Me</Link>
        <Link to="/projects" className="btn">View Projects</Link>
      </div>
    </section>
  );
}
