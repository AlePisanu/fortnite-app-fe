import { useTranslation } from "react-i18next";
import CosmeticCard from "../../atoms/CosmeticsCard/CosmeticCard";
import styles from "./CosmeticCardTemplate.module.scss";
import { Flex, Box, Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Cosmetic } from "../../../utils/interfaces/Cosmetic.interface";

//TODO set Props considering an array of Cards
type CosmeticCardTemplateProps = {
  title: string;
};

const CosmeticCardTemplate: React.FC<CosmeticCardTemplateProps> = ({
  title,
}) => {
  const handleClick = () => {};
  const cards: Cosmetic[] = useSelector((state: any) => state.cosmeticsConfig.cosmetics);
  return (
    <Box mx={4} mb={4}>
      <Heading maxW={500} as="h1" size="xl" fontFamily="Luckiest Guy">
        {title}
      </Heading>
      <Flex overflowY="auto" gap={6}>
        {cards.map((card, index) => (
          <CosmeticCard
          key={`card-${index}`}
          imgSrc={card.image}
          imgAlt={card.name.replace(/\s/g, "_")}
          action={() => true}
          title={card.name}
          description={card.description}
        />
        ))}
      </Flex>
    </Box>
  );
};

export default CosmeticCardTemplate;
