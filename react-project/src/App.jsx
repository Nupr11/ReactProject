import "./styles/constants.css";
import "./styles/fonts.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Layout } from "./layouts";
import { Home, PageNotFound, Characters, Comics } from "./pages";
import { Character } from "./pages/characters/components/character";
import { AnimatePresence } from "framer-motion";

export function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="*" index element={<PageNotFound />} />
          <Route path="/" index element={<Navigate to="home" replace />} />
          <Route path="home" index element={<Home />} />
          <Route path="characters" element={<Characters />} />
          <Route path="characters/:id/comics" element={<Character />} />
          <Route path="comics" element={<Comics />} />
          <Route path="comics/:id/stories" element />
          <Route path="comics/:id/series" element />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}
