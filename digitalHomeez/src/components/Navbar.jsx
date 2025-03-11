import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h1 className="logo" onClick={closeMenu}>DH Genix Media</h1>

      {/* Hamburger Menu */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </div>

      {/* Navigation Links (Hidden when menu is closed) */}
      <ul className={`nav-links ${menuOpen ? "open" : "hidden"}`}>
        <li><a href="#hero" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#services" onClick={closeMenu}>Services</a></li>
        <li><a href="#case-studies" onClick={closeMenu}>Case Studies</a></li>
        <li><a href="#work-with-us" onClick={closeMenu}>Work With Us</a></li>
        <li><a href="#blogs" onClick={closeMenu}>Blogs</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
