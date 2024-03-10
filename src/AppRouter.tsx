import "./App.scss";
import { Route, MemoryRouter as Router, Routes } from "react-router-dom";
import { routes } from "./communication/routes";
import Dashboard from "./screens/Dashboard";
import Navbar from "./components/molecules/Navbar/Navbar";
import News from "./screens/News";
import Cosmetics from "./screens/Cosmetics";
import Footer from "./components/molecules/Footer/Footer";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={routes.DASHBOARD} element={<Dashboard />} />
        <Route path={routes.NEWS} element={<News />} />
        <Route path={routes.COSMETICS} element={<Cosmetics />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default AppRouter;
