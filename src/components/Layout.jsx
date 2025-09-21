// src/components/Layout.jsx
import { NavLink, Outlet } from "react-router-dom";
// TEMP: use the existing Vite icon until you add your own logo
import logo from "../assets/logo.jpeg";
import "./layout.css";

export default function Layout() {
  return (
    <header className="site-header">
      <div className="topbar">
        <div className="brand">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="title">My Portfolio Website</h1>
        </div>
        <nav className="navbar">
          <NavLink to="/" end className="navlink">Home</NavLink>
          <NavLink to="/about" className="navlink">About</NavLink>
          <NavLink to="/projects" className="navlink">Projects</NavLink>
          <NavLink to="/services" className="navlink">Services</NavLink>
        </nav>
      </div>
      <Outlet />
      <hr />
    </header>
  );
}
