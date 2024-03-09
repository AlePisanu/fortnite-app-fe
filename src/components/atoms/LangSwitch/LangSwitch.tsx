import { Flex, Switch, Text } from "@chakra-ui/react";
import i18n from "../../../communication/i18n";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const LangSwitch = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState(false);
  const toggleLang = () => {
    const newLanguage = i18n.language === "en" ? "it" : "en";
    i18n.changeLanguage(newLanguage);
    setLang(!lang);
  };
  return (
    <Flex alignItems="center">
      <Text fontFamily="Rubik Mono One" fontSize={10}>{t("LangSwitchIT")}</Text>
      <Switch color="green" isChecked={lang} onChange={toggleLang} mx={1} />
      <Text fontFamily="Rubik Mono One" fontSize={10}>{t("LangSwitchEN")}</Text>
    </Flex>
  );
};

export default LangSwitch;
