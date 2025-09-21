// src/components/Layout.jsx
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.jpeg"; // put a logo image here (see step 3)
import "./layout.css";                 // styles below

export default function Layout() {
  return (
    <header className="site-header">
      <div className="topbar">
        <div className="brand">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="title">My Portfolio Website</h1>
        </div>

        <nav className="navbar">
          <NavLink to="/" end className="navlink">
            Home
          </NavLink>
          <NavLink to="/about" className="navlink">
            About
          </NavLink>
          <NavLink to="/projects" className="navlink">
            Projects
          </NavLink>
          <NavLink to="/services" className="navlink">
            Services
          </NavLink>
        </nav>
      </div>

      {/* If you're using nested routes, the page content renders here */}
      <Outlet />
      <hr />
    </header>
  );
}
