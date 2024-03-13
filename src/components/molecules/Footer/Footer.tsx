import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box as="footer" mt="auto" py="4" textAlign="center">
      <Text>{t("FooterText")}</Text>
    </Box>
  );
};

export default Footer;
