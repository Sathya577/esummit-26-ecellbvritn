<<<<<<< HEAD
import { useState, useEffect } from "react";
import "./navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
    document.body.style.overflow = mobileOpen ? "" : "hidden";
  };

  const closeMenu = () => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) closeMenu();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Floating Background */}
      <div className="floating-elements">
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar-container">
        <div className="navbar">
          <a href="/" className="navbar-brand">
            <div className="logo-icon">
  <img src="/ecell_bvrit_logo.png" alt="Esummit Logo" />
</div>
            <span className="brand-text">ESummit</span>
          </a>

          <ul className="navbar-nav">
            <li><a href="/" className="nav-link active">Home</a></li>
            <li><a href="https://drive.google.com/file/d/1SlQWd2Cgo-9BMomoNqnxe1czNIIRSqAG/view?usp=drive_link" className="nav-link">About</a></li>
            <li><a href="/events" className="nav-link">Events</a></li>
            <li><a href="/Speakers" className="nav-link">Speakers</a></li>
            <li><a href="https://www.instagram.com/ecell_bvrit/" className="nav-link">Contact</a></li>
            <li><a href="/events" className="cta-button">Register</a></li>
          </ul>

          <button
            className={`mobile-toggle ${mobileOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`mobile-menu-overlay ${mobileOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${mobileOpen ? "active" : ""}`}>
        <div className="mobile-menu-header">
          <span className="brand-text">ESummit</span>
          <button className="mobile-menu-close" onClick={closeMenu}>×</button>
        </div>

        <ul className="mobile-menu-nav">
          <li><a href="/" className="mobile-menu-link" onClick={closeMenu}>Home</a></li>
          <li><a href="https://drive.google.com/file/d/1SlQWd2Cgo-9BMomoNqnxe1czNIIRSqAG/view?usp=drive_link" className="mobile-menu-link" onClick={closeMenu}>About</a></li>
          <li><a href="/events" className="mobile-menu-link" onClick={closeMenu}>Events</a></li>
          <li><a href="/Speakers" className="mobile-menu-link" onClick={closeMenu}>Speakers</a></li>
          <li><a href="https://www.instagram.com/ecell_bvrit/" className="mobile-menu-link" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </>
  );
=======
import { useState, useEffect } from "react";
import "./navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
    document.body.style.overflow = mobileOpen ? "" : "hidden";
  };

  const closeMenu = () => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) closeMenu();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Floating Background */}
      <div className="floating-elements">
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar-container">
        <div className="navbar">
          <a href="/" className="navbar-brand">
            <div className="logo-icon">
  <img src="/ecell_bvrit_logo.png" alt="Esummit Logo" />
</div>
            <span className="brand-text">ESummit</span>
          </a>

          <ul className="navbar-nav">
            <li><a href="/" className="nav-link active">Home</a></li>
            <li><a href="https://drive.google.com/file/d/1SlQWd2Cgo-9BMomoNqnxe1czNIIRSqAG/view?usp=drive_link" className="nav-link">About</a></li>
            <li><a href="/events" className="nav-link">Events</a></li>
            <li><a href="/Speakers" className="nav-link">Speakers</a></li>
            <li><a href="https://www.instagram.com/ecell_bvrit/" className="nav-link">Contact</a></li>
            <li><a href="/events" className="cta-button">Register</a></li>
          </ul>

          <button
            className={`mobile-toggle ${mobileOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`mobile-menu-overlay ${mobileOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${mobileOpen ? "active" : ""}`}>
        <div className="mobile-menu-header">
          <span className="brand-text">ESummit</span>
          <button className="mobile-menu-close" onClick={closeMenu}>×</button>
        </div>

        <ul className="mobile-menu-nav">
          <li><a href="/" className="mobile-menu-link" onClick={closeMenu}>Home</a></li>
          <li><a href="https://drive.google.com/file/d/1SlQWd2Cgo-9BMomoNqnxe1czNIIRSqAG/view?usp=drive_link" className="mobile-menu-link" onClick={closeMenu}>About</a></li>
          <li><a href="/events" className="mobile-menu-link" onClick={closeMenu}>Events</a></li>
          <li><a href="/Speakers" className="mobile-menu-link" onClick={closeMenu}>Speakers</a></li>
          <li><a href="https://www.instagram.com/ecell_bvrit/" className="mobile-menu-link" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </>
  );
>>>>>>> f28f9da7251204656258f8394977c7a1fc1d019a
}