import { Link } from "react-router-dom";
import Badge from "./Badge";
import "../css/header.css";

// Header for the case study pages, in the newspaper style:
// left = back to the Projects section, right = the badge, back to the front page.
function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <Link to="/#projects" className="header-back">
          <span aria-hidden="true">←</span> Projects
        </Link>

        <Link to="/" className="header-badge" aria-label="Back to the front page">
          <Badge label="" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
