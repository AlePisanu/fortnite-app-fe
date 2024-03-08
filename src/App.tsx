import { useEffect } from "react";
import "./App.scss";
import { ChakraProvider } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import i18n from "./communication/i18n";
import AppRouter from "./AppRouter";

function App() {
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
      <AppRouter/>
      <h1>{t("menuItemDashboard")}</h1>
    </ChakraProvider>
  );
}

export default App;
