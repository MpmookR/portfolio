import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Sopup from "./pages/projects/Sopup";
import SoWell from "./pages/projects/SoWell";
import IShare from "./pages/projects/IShare";
import MoodBoard from "./pages/projects/MoodBoard";
import PassionHub from "./pages/projects/PassionHub";
import Millennium from "./pages/projects/Millennium";

function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;