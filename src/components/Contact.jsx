import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "", email: "", subject: "", message: ""
  });
  const [errors, setErrors] = useState({});

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "First name is required.";
    if (!form.lastName.trim()) e.lastName = "Last name is required.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email.";
    if (form.phone && !/^[0-9+\-\s()]{7,}$/.test(form.phone)) e.phone = "Enter a valid phone.";
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (!form.message.trim()) e.message = "Message is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Contact form:", form);      // captured data
    alert("Thanks for reaching out! I’ll get back to you soon.");
    navigate("/");                            // redirect to Home
  };

  return (
    <section className="section">
      <h1>Contact</h1>
      <form className="card form" onSubmit={onSubmit} noValidate>
        <div className="row">
          <div>
            <label className="label" htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" className="input" value={form.firstName} onChange={onChange} />
            {errors.firstName && <div className="error">{errors.firstName}</div>}
          </div>
          <div>
            <label className="label" htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" className="input" value={form.lastName} onChange={onChange} />
            {errors.lastName && <div className="error">{errors.lastName}</div>}
          </div>
        </div>

        <div className="row" style={{marginTop:12}}>
          <div>
            <label className="label" htmlFor="phone">Contact Number</label>
            <input id="phone" name="phone" className="input" value={form.phone} onChange={onChange} placeholder="+1 555 123 4567" />
            <div className="help">Optional. Numbers, spaces, +, -, ( )</div>
            {errors.phone && <div className="error">{errors.phone}</div>}
          </div>
          <div>
            <label className="label" htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" className="input" value={form.email} onChange={onChange} />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
        </div>

        <div className="row single" style={{marginTop:12}}>
          <div>
            <label className="label" htmlFor="subject">Subject</label>
            <input id="subject" name="subject" className="input" value={form.subject} onChange={onChange} />
            {errors.subject && <div className="error">{errors.subject}</div>}
          </div>
        </div>

        <div className="row single" style={{marginTop:12}}>
          <div>
            <label className="label" htmlFor="message">Message</label>
            <textarea id="message" name="message" className="textarea" rows={5} value={form.message} onChange={onChange} />
            {errors.message && <div className="error">{errors.message}</div>}
          </div>
        </div>

        <div className="btnrow">
          <button className="btn primary" type="submit">Send</button>
        </div>
      </form>
    </section>
  );
}
