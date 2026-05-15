import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/" className="logo" aria-label="Mook's Portfolio logo">
          <img
            src="/src/assets/images/logo/logo_orange.svg"
            alt="Mook's Portfolio"
          />
        </Link>

        <nav className="nav-menu">
          <Link
            to="/"
            className={`nav-link ${isActive("/") ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className={`nav-link ${isActive("/portfolio") ? "active" : ""}`}
          >
            Portfolio
          </Link>
          <Link
            to="/resume"
            className={`nav-link ${isActive("/resume") ? "active" : ""}`}
          >
            Resume
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
