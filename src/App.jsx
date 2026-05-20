import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./Pages/Home";
import CaseStudyLandslide from "./Pages/CaseStudyLandslide";
import CaseStudyIndex from "./Pages/CaseStudyIndex";
import { CursorFollower } from "./components/UI/CursorFollower";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <CursorFollower />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-study" element={<CaseStudyIndex />} />
          <Route path="/case-study/landslide-detection" element={<CaseStudyLandslide />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
