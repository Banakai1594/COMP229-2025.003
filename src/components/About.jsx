import photo from "../assets/profile.jpg";

export default function About() {
  return (
    <section className="section">
      <h1>About Me</h1>
      <img src={photo} alt="Ali Mustafa" className="avatar" />
      <p style={{marginTop:12}}>
        I’m a student at Centennial College focusing on React, JavaScript, C#, and SQL.
        I enjoy translating course requirements into working apps and clean documentation.
        Outside of class, I explore Linux servers and deployment basics.
      </p>
    </section>
  );
}
