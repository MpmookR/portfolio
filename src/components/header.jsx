import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="logo" aria-label="Mook's Portfolio logo" onClick={closeMenu}>
          <img
            src="/src/assets/images/logo/logo_orange.svg"
            alt="Mook's Portfolio"
          />
        </Link>

        <button
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${isActive("/") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className={`nav-link ${isActive("/portfolio") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Portfolio
          </Link>
          <Link
            to="/resume"
            className={`nav-link ${isActive("/resume") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Resume
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
