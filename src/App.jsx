import { Routes, Route } from "react-router";
import PageLayout from "./layout/PageLayout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import OurStory from "./pages/OurStory";
import CustomPiece from "./pages/CustomPiece";

export default function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="our-story" element={<OurStory />} />
        <Route path="custom-piece" element={<CustomPiece />} />
      </Route>
    </Routes>
  );
}
