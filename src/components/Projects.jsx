export default function Projects() {
  const projects = [
    {
      title: "TapAndGo (SRS / UML)",
      text: "Requirements & diagrams for an ATM reservation feature; team doc and presentation.",
      imagePath: ""
    },
    {
      title: "Bookstore Database (Oracle SQL)",
      text: "ERD, constraints, sample data, and queries for an Amazon-style storefront.",
      imagePath: ""
    },
    {
      title: "Fraction Calculator (C# WinForms)",
      text: "GUI calculator supporting + − × ÷ and simplify; input validation and clean UX.",
      imagePath: ""
    },
  ];

  return (
    <section className="section">
      <h1>Projects</h1>
      <div className="grid">
        {projects.map((p, i) => (
          <article className="card" key={i}>
            {p.imagePath ? (
              <img
                src={p.imagePath}
                alt={p.title}
                style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: 10, marginBottom: 10 }}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            ) : null}
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
