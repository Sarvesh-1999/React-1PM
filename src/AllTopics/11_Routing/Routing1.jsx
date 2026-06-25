import HomePage from "./pages/Homepage";
import BlogPage from "./pages/BlogPage";
import ReferencePage from "./pages/ReferencesPage";
import LearnPage from "./pages/LearnPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Routing1 = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/reference/react" element={<ReferencePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing1;
