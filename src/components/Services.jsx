export default function Services() {
  const services = [
    { title: "Frontend (React)", text: "Single-page apps, routing, simple state & forms." },
    { title: "Web Basics", text: "HTML/CSS/JS, responsive layouts, clean components." },
    { title: "Node Basics", text: "Express routing, simple APIs, JSON handling." },
    { title: "SQL Help", text: "Schema design, sample data, and queries." },
  ];

  return (
    <section className="section">
      <h1>Services</h1>
      <div className="grid">
        {services.map((s, i) => (
          <article className="card" key={i}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
