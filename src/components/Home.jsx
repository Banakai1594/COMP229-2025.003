import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="section">
      <h1>Welcome!</h1>
      <p>
        I’m Ali Mustafa, a software engineering student building simple, fast web apps.
        This site highlights a few projects and services I offer while studying.
      </p>
      <div className="btnrow">
        <Link to="/about" className="btn primary">About Me</Link>
        <Link to="/projects" className="btn">View Projects</Link>
      </div>
      <p style={{marginTop:12, opacity:.8}}>
        Mission: keep things clear, accessible, and useful.
      </p>
    </section>
  );
}
