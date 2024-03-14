import { Box } from "@chakra-ui/layout";
import CosmeticsTemplate from "../components/templates/CosmeticPageTemplate/CosmeticPageTemplate";
import { useTranslation } from "react-i18next";

const Cosmetics = () => {
  const {t} = useTranslation()
  return (
    <Box>
      <CosmeticsTemplate titleFavorite={t("FavoriteCosmetics")}/>
    </Box>
  );
};

export default Cosmetics;
