import { Box, Grid, Container } from "@chakra-ui/layout";
import CosmeticCard from "../components/molecules/CosmeticCard";
import Hero from "../components/atoms/Hero";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation();
  const handleClick = () => {
    
  }
  return (
    <>
      <Hero
        title={t("heroTitle")}
        backgroundImage="https://www.fortnite.com/images/creative-islands/creator-hero-fallback.jpg"
        btnText={t("heroBtnText")}
        onPress={handleClick}
      />
      <Box mx={20}>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <CosmeticCard
            imgSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            imgAlt="test"
            btnAction={() => true}
            title="Test"
            description="test"
          />
          <CosmeticCard
            imgSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            imgAlt="test"
            btnAction={() => true}
            title="Test"
            description="test"
          />
          <CosmeticCard
            imgSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            imgAlt="test"
            btnAction={() => true}
            title="Test"
            description="test"
          />
          <CosmeticCard
            imgSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            imgAlt="test"
            btnAction={() => true}
            title="Test"
            description="test"
          />
          <CosmeticCard
            imgSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            imgAlt="test"
            btnAction={() => true}
            title="Test"
            description="test"
          />
          <CosmeticCard
            imgSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            imgAlt="test"
            btnAction={() => true}
            title="Test"
            description="test"
          />
          <CosmeticCard
            imgSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            imgAlt="test"
            btnAction={() => true}
            title="Test"
            description="test"
          />
          <CosmeticCard
            imgSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            imgAlt="test"
            btnAction={() => true}
            title="Test"
            description="test"
          />
          <CosmeticCard
            imgSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            imgAlt="test"
            btnAction={() => true}
            title="Test"
            description="test"
          />
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
