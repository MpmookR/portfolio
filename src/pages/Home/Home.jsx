import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/footer";
import "./Home.css";

import FrontPage from "./sections/FrontPage";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

// The homepage, laid out like a newspaper. This file only sets the order;
// each section keeps its own markup and styles in ./sections, and pieces
// used only here live in ./components.
// Keep Home.css imported before the sections: it holds the shared tokens
// and rules that the section stylesheets build on.
function Home() {
  const location = useLocation();

  // Arriving with a hash (e.g. the old /portfolio link redirects to /#projects):
  // wait a frame so App's scroll-to-top runs first, then jump to the section.
  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (!id) return;
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ block: "start" });
        target.focus({ preventScroll: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [location.hash]);

  return (
    <div className="np-page">
      <main className="np" id="np-top" tabIndex={-1}>
        <FrontPage />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
