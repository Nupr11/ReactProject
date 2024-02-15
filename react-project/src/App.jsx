import "./styles/constants.css";
import "./styles/fonts.css";
import { SWRConfig } from "swr";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Layout } from "./layouts";
import { RequireAuth } from "./hoc/RequireAuth";
import "./lib/firebase";
import {
  Auth,
  ComicBook,
  Comics,
  CharDetails,
  CharComics,
  Chars,
  DailyCollection,
  Home,
  NotFound,
  UserProfile,
} from "./pages";

export function App() {
  const location = useLocation();

  return (
    <SWRConfig value={{ revalidateIfStale: false }}>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" index element={<Navigate to="home" replace />} />
            <Route path="home" index element={<Home />} />
            <Route path="auth" element={<Auth />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="characters" element={<Chars />} />
            <Route path="characters/:charId" element={<CharDetails />} />
            <Route path="characters/:charId/comics" element={<CharComics />} />
            <Route path="comics" element={<Comics />} />
            <Route path="comics/:id" element={<ComicBook />} />
            <Route
              path="collection"
              element={
                <RequireAuth>
                  <DailyCollection />
                </RequireAuth>
              }
            />
            <Route path="*" index element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </SWRConfig>
  );
}
