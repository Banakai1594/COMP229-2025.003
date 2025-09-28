import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import "./layout.css";

export default function Layout() {
  const fallback = "/vite.svg";
  const onLogoError = (e) => { e.currentTarget.src = fallback; e.currentTarget.onerror = null; };

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="brand">
          <img src={logo} alt="Logo" className="brand-logo" onError={onLogoError} />
          <h1 className="title">Ali Mustafa — Portfolio</h1>
        </div>
        <nav className="navbar">
          <NavLink to="/" end className="navlink">Home</NavLink>
          <NavLink to="/about" className="navlink">About</NavLink>
          <NavLink to="/projects" className="navlink">Projects</NavLink>
          <NavLink to="/services" className="navlink">Services</NavLink>
          <NavLink to="/contact" className="navlink">Contact</NavLink>
        </nav>
      </div>
      <main className="page-area"><Outlet /></main>
      <footer className="footer">© {new Date().getFullYear()} Ali Mustafa</footer>
    </header>
  );
}
