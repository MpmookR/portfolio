import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Sopup from "./pages/projects/Sopup";
import SoWell from "./pages/projects/SoWell";
import IShare from "./pages/projects/IShare";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;