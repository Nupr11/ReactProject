import "./styles/constants.css";
import "./styles/fonts.css";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Layout } from "./layouts";
import {
  Home,
  Characters,
  CharDetails,
  Comics,
  ComicsByChar,
  ComicsByDetails,
  PageNotFound,
} from "./pages";
import { SWRConfig } from "swr";

export function App() {
  const location = useLocation();

  return (
    <SWRConfig value={{ revalidateIfStale: false }}>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="*" index element={<PageNotFound />} />
            <Route path="/" index element={<Navigate to="home" replace />} />
            <Route path="home" index element={<Home />} />
            <Route path="characters" element={<Characters />} />
            <Route path="characters/:charId" element={<CharDetails />} />
            <Route
              path="characters/:charId/comics"
              element={<ComicsByChar />}
            />
            <Route path="comics" element={<Comics />} />
            <Route path="comics/:id" element={<ComicsByDetails />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </SWRConfig>
  );
}
