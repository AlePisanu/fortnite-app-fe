import { Box, Text, Link } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box as="footer" mt="auto" py="4" textAlign="center">
      <Text>{t("FooterText")}</Text>
    </Box>
  );
};

export default Footer;
