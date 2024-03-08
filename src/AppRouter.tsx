import { useEffect } from "react";
import "./App.scss";
import {
  Route,
  MemoryRouter as Router,
  Routes,
} from "react-router-dom";
import i18n from "./communication/i18n";
import { routes } from "./communication/routes";

function AppRouter() {
  useEffect(() => {
    sessionStorage.setItem("lang", "it");
    const currLang = sessionStorage.getItem("lang")?.toString();
    if (currLang) {
      i18n.changeLanguage(currLang);
    }
  }, []);
  return (
    <Router>
      <Routes>
        <Route path={routes.DASHBOARD} element={} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
