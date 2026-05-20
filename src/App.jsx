import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./Pages/Home";
import CaseStudyLandslide from "./Pages/CaseStudyLandslide";
import CaseStudy3rdStep from "./Pages/CaseStudy3rdStep";
import CaseStudyIndex from "./Pages/CaseStudyIndex";
import { CursorFollower } from "./components/UI/CursorFollower";

function App() {
  const basename = import.meta.env.PROD ? "/Profile" : "/";
  return (
    <HelmetProvider>
      <BrowserRouter basename={basename}>
        <CursorFollower />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-study" element={<CaseStudyIndex />} />
          <Route path="/case-study/landslide-detection" element={<CaseStudyLandslide />} />
          <Route path="/case-study/3rd-step-verification" element={<CaseStudy3rdStep />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
