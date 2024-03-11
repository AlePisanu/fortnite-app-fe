import Hero from "../components/molecules/Hero/Hero";
import { useTranslation } from "react-i18next";
import CosmeticCardTemplate from "../components/templates/CosmeticCardTemplate/CosmeticCardTemplate";
import { Cosmetic } from "../utils/interfaces/Cosmetic.interface";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const { t } = useTranslation();
  const handleClick = () => {};

  const cards: Cosmetic[] = useSelector(
    (state: any) => state.cosmeticsConfig.cosmetics
  );
  return (
    <>
      <Hero
        title={t("heroTitleDashboard1")}
        backgroundImage="https://www.fortnite.com/images/creative-islands/creator-hero-fallback.jpg"
        btnText={t("heroBtnTextDashboard1")}
        onPress={handleClick}
        btnPosition="flex-start"
        textPosition="flex-start"
      />
      <CosmeticCardTemplate title={t("dashboardCosmetics")} cards={cards}/>
      <CosmeticCardTemplate title={t("dashboardCosmetics")} cards={cards}/>
      <CosmeticCardTemplate title={t("dashboardCosmetics")} cards={cards}/>
      <Hero
        title={t("heroTitleDashboard2")}
        backgroundImage="https://cdn2.unrealengine.com/keyart-overscan-nologo-2-2276x1280-aa06338f9aae.jpg"
        btnText={t("heroBtnTextDashboard2")}
        onPress={handleClick}
        btnPosition="flex-end"
        textPosition="flex-end"
      />
    </>
  );
};

export default Dashboard;
