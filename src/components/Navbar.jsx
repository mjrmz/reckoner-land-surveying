import { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

// IMPORT THE LOGO CORRECTLY
import Logo from "../assets/images/reckonerlogo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Reckoner Logo" />
        <span className="logo-text">Reckoner Land Surveying</span>
      </div>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="mobile-menu-icon" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}
