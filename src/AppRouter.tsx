import { useEffect } from "react";
import "./App.scss";
import { Route, MemoryRouter as Router, Routes } from "react-router-dom";
import i18n from "./communication/i18n";
import { routes } from "./communication/routes";
import Dashboard from "./screens/Dashboard";
import Navbar from "./components/molecules/Navbar";
import { Box, Container } from "@chakra-ui/react";
import News from "./screens/News";
import Cosmetics from "./screens/Cosmetics";

const AppRouter = () => {
  useEffect(() => {
    sessionStorage.setItem("lang", "it");
    const currLang = sessionStorage.getItem("lang")?.toString();
    if (currLang) {
      i18n.changeLanguage(currLang);
    }
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={routes.DASHBOARD} element={<Dashboard />} />
        <Route path={routes.NEWS} element={<News />} />
        <Route path={routes.COSMETICS} element={<Cosmetics />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
