import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import GuidePanel from "./pages/GuidePanel";
import GuardianDashboard from "./pages/GuardianDashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/guide-panel" element={<GuidePanel />} />
        <Route path="/community" element={<GuardianDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
