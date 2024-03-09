import { useEffect } from "react";
import "./App.scss";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import i18n from "./communication/i18n";
import AppRouter from "./AppRouter";
import Navbar from "./components/molecules/Navbar";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const { t } = useTranslation();
  useEffect(() => {
    sessionStorage.setItem("lang", "it");
    const currLang = sessionStorage.getItem("lang")?.toString();
    if (currLang) {
      i18n.changeLanguage(currLang);
    }
  }, []);
  return (
    <ChakraProvider>
      <AppRouter />
    </ChakraProvider>
  );
}

export default App;
