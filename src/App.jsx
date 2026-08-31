import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Sopup from "./pages/projects/Sopup";
import SoWell from "./pages/projects/SoWell";
import IShare from "./pages/projects/IShare";
import MoodBoard from "./pages/projects/MoodBoard";
import PassionHub from "./pages/projects/PassionHub";
import Millennium from "./pages/projects/Millennium";
import LocalEdition from "./pages/projects/LocalEdition";

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
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects/sopup" element={<Sopup />} />
        <Route path="/projects/sowell" element={<SoWell />} />
        <Route path="/projects/ishare" element={<IShare />} />
        <Route path="/projects/moodboard" element={<MoodBoard />} />
        <Route path="/projects/passionhub" element={<PassionHub />} />
        <Route path="/projects/millennium" element={<Millennium />} />
        <Route path="/projects/localedition" element={<LocalEdition />} />
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