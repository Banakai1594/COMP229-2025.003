import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "", email: "", message: ""
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Captured form data:", form); // captured info
    alert("Thanks! Redirecting to Home.");
    navigate("/"); // redirect to Home
  };

  return (
    <section className="section">
      <h1>Contact</h1>
      <form className="card" onSubmit={onSubmit} style={{ maxWidth: 640 }}>
        <div style={{ display: "grid", gap: 10, gridTemplateColumns: "1fr 1fr" }}>
          <input name="firstName" placeholder="First Name" value={form.firstName} onChange={onChange} required />
          <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={onChange} required />
        </div>
        <div style={{ display: "grid", gap: 10, gridTemplateColumns: "1fr 1fr", marginTop: 10 }}>
          <input name="phone" placeholder="Contact Number" value={form.phone} onChange={onChange} />
          <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={onChange} required />
        </div>
        <textarea
          name="message" placeholder="Message"
          value={form.message} onChange={onChange}
          rows={5} style={{ marginTop: 10 }}
        />
        <div className="btnrow">
          <button className="btn primary" type="submit">Send</button>
        </div>
      </form>
    </section>
  );
}
