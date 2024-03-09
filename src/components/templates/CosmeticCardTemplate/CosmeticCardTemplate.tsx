import { useTranslation } from "react-i18next";
import CosmeticCard from "../../atoms/CosmeticsCard/CosmeticCard";
import styles from "./CosmeticCardTemplate.module.scss";
import { Flex, Box, Heading } from "@chakra-ui/react";

//TODO set Props considering an array of Cards
type CosmeticCardTemplateProps = {
  title: string;
}

const CosmeticCardTemplate: React.FC<CosmeticCardTemplateProps> = ({title}) => {
  const handleClick = () => {};
  return (
    <Box mx={4} mb={4}>
      <Heading maxW={500} as="h1" size="xl" fontFamily="Luckiest Guy">
        {title}
      </Heading>
      <Flex overflowY="auto" gap={6}>
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
      </Flex>
    </Box>
  );
};

export default CosmeticCardTemplate;
