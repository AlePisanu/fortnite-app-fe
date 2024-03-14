import "./App.scss";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { routes } from "./communication/routes";
import Dashboard from "./screens/Dashboard";
import Navbar from "./components/molecules/Navbar/Navbar";
import News from "./screens/News";
import Cosmetics from "./screens/Cosmetics";
import Footer from "./components/molecules/Footer/Footer";
import SingleNews from "./screens/SingleNews";
import Login from "./screens/Login";
import { useEffect, useState } from "react";
import { getCurrentUser } from "aws-amplify/auth";
import { useSelector } from "react-redux";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loggedIn = useSelector((state: any) => state.loginConfig.logged);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        await getCurrentUser();
        setIsLoggedIn(true);
      } catch (error) {
        setIsLoggedIn(false);
      }
    };

    checkAuthStatus();
  }, [loggedIn]);
  return (
    <Router>
      {isLoggedIn && <Navbar />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path={routes.DASHBOARD} element={<Dashboard />} />
            <Route path={routes.NEWS} element={<News />} />
            <Route
              path={`${routes.NEWS}/:newsParam`}
              element={<SingleNews />}
            />
            <Route path={routes.COSMETICS} element={<Cosmetics />} />
          </>
        ) : (
          <Route path={routes.LOGIN} element={<Login />} />
        )}
        <Route path="*" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
