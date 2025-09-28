export default function Projects() {
  const projects = [
    {
      title: "TapAndGo (SRS / UML)",
      text: "Requirements & diagrams for an ATM reservation feature; team doc and presentation."
    },
    {
      title: "Linux Load Balancer (Nginx)",
      text: "Configured Nginx to distribute traffic across app servers, tested health checks, and verified failover."
    },
    {
      title: "Fraction Calculator (C# WinForms)",
      text: "GUI calculator with + − × ÷ and simplify; input validation and clean UX."
    },
  ];

  return (
    <section className="section">
      <h1>Projects</h1>
      <div className="grid">
        {projects.map((p, i) => (
          <article className="card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
