import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./Pages/Home";
import CaseStudyLandslide from "./Pages/CaseStudyLandslide";
import CaseStudy3rdStep from "./Pages/CaseStudy3rdStep";
import CaseStudyIndex from "./Pages/CaseStudyIndex";
import BlogAmazonPrimeVideo from "./Pages/BlogAmazonPrimeVideo";
import BlogsIndex from "./Pages/BlogsIndex";
import { CursorFollower } from "./components/UI/CursorFollower";

const AIChat = lazy(() => import("./components/UI/AIChat"));

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename="/">
        <CursorFollower />
        <Suspense fallback={null}><AIChat /></Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-study" element={<CaseStudyIndex />} />
          <Route path="/case-study/landslide-detection" element={<CaseStudyLandslide />} />
          <Route path="/case-study/3rd-step-verification" element={<CaseStudy3rdStep />} />
          <Route path="/blog" element={<BlogsIndex />} />
          <Route path="/blog/amazon-prime-video-monolith" element={<BlogAmazonPrimeVideo />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
