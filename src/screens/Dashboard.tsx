import { Box, Grid, Heading } from "@chakra-ui/layout";
import CosmeticCard from "../components/molecules/CosmeticsCard/CosmeticCard";
import Hero from "../components/atoms/Hero/Hero";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation();
  const handleClick = () => {};
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
      <Box mx={2}>
        <Heading maxW={500} as="h1" size="xl" fontFamily="Luckiest Guy">
          {t("dashboardCosmetics")}
        </Heading>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <CosmeticCard
            imgSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            imgAlt="test"
            action={() => true}
            title="Test"
            description="test"
          />
          <CosmeticCard
            imgSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            imgAlt="test"
            action={() => true}
            title="Test"
            description="test"
          />
          <CosmeticCard
            imgSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            imgAlt="test"
            action={() => true}
            title="Test"
            description="test"
          />
          <CosmeticCard
            imgSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            imgAlt="test"
            action={() => true}
            title="Test"
            description="test"
          />
          <CosmeticCard
            imgSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            imgAlt="test"
            action={() => true}
            title="Test"
            description="test"
          />
          <CosmeticCard
            imgSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            imgAlt="test"
            action={() => true}
            title="Test"
            description="test"
          />
          <CosmeticCard
            imgSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            imgAlt="test"
            action={() => true}
            title="Test"
            description="test"
          />
          <CosmeticCard
            imgSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            imgAlt="test"
            action={() => true}
            title="Test"
            description="test"
          />
          <CosmeticCard
            imgSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            imgAlt="test"
            action={() => true}
            title="Test"
            description="test"
          />
        </Grid>
      </Box>
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
