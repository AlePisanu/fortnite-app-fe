import "./App.scss";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import AppRouter from "./AppRouter";
import DataLoader from "./DataLoader";
import { useEffect } from "react";
import i18n from "./communication/i18n";

const App = () => {
  const defaultColorMode = "dark";
  useEffect(() => {
    const currLang = sessionStorage.getItem("lang");
    if (currLang) {
      i18n.changeLanguage(currLang);
    } else {
      sessionStorage.setItem("lang", "it");
    }
  }, []);
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={defaultColorMode} />
      <DataLoader />
      <AppRouter />
    </ChakraProvider>
  );
};

export default App;
