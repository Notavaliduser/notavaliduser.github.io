import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Work from "./pages/Work";
import Photography from "./pages/Photography";
import Art from "./pages/Art";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/work" element={<Navigate to="/" replace />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/art" element={<Art />} />
          <Route path="/case-study/:id" element={<CaseStudyDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
