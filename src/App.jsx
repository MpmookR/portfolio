import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import NewsHome from "./pages/NewsHome";
// import Aboutme from "./pages/Resume"; // route switched off below
import Sopup from "./pages/projects/Sopup";
// import SoWell from "./pages/projects/SoWell"; // route switched off below
// import IShare from "./pages/projects/IShare"; // route switched off below
import MoodBoard from "./pages/projects/MoodBoard";
// import PassionHub from "./pages/projects/PassionHub"; // route switched off below
// import Millennium from "./pages/projects/Millennium"; // route switched off below
import LocalEdition from "./pages/projects/LocalEdition";
import Ondo from "./pages/projects/Ondo";

// Separate component so useLocation() can be called inside <BrowserRouter>.
// key={location.key} remounts the div on every route change,
// which replays the CSS page-transition animation.
function AppRoutes() {
  const location = useLocation();

  // useEffect scrolls to the top so every new page starts at the beginning.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.key]);

  return (
    <div key={location.key} className="page-transition">
      <Routes>
        <Route path="/" element={<NewsHome />} />
        {/* Projects now live on the homepage; keep old links working. */}
        <Route path="/portfolio" element={<Navigate to="/#projects" replace />} />
        {/* The old About page and résumé now live in the homepage About section. */}
        <Route path="/aboutme" element={<Navigate to="/#about" replace />} />
        <Route path="/projects/sopup" element={<Sopup />} />
        {/* <Route path="/projects/sowell" element={<SoWell />} /> */}
        {/* <Route path="/projects/ishare" element={<IShare />} /> */}
        <Route path="/projects/moodboard" element={<MoodBoard />} />
        {/* <Route path="/projects/passionhub" element={<PassionHub />} />
        <Route path="/projects/millennium" element={<Millennium />} /> */}
        <Route path="/projects/localedition" element={<LocalEdition />} />
        <Route path="/projects/ondo" element={<Ondo />} />
        {/* Anything else (old or mistyped links) goes to the front page, not a blank screen. */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;