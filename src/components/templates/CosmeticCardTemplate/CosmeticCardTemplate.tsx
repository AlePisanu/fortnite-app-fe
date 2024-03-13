import CosmeticCard from "../../atoms/CosmeticsCard/CosmeticCard";
import styles from "./CosmeticCardTemplate.module.scss";
import { Flex, Box, Heading, Grid, Button, Tag } from "@chakra-ui/react";
import { Cosmetic } from "../../../utils/interfaces/Cosmetic.interface";
import { useEffect, useState } from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { CosmeticsType } from "../../../api/interfaces/Cosmetics";

type CosmeticCardTemplateProps = {
  title: string;
};

const CosmeticCardTemplate = ({ title }: CosmeticCardTemplateProps) => {
  const cards: Cosmetic[] = useSelector(
    (state: any) => state.cosmeticsConfig.latestCosmetics
  );
  const [customCards, setCustomCards] = useState<Cosmetic[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  let categories: CosmeticsType[] = useSelector(
    (state: any) => state.cosmeticsConfig.cosmeticsCategory
  );
  useEffect(() => {
    setCustomCards(cards);
  }, [cards]);
  const [currentFilter, setCurrentFilter] = useState<string[]>([]);
  const handleChipClick = (value: string) => {
    let filter: string[];

    if (currentFilter.includes(value)) {
      filter = currentFilter.filter((item) => item !== value);
    } else {
      filter = [...currentFilter, value];
    }
    setCurrentFilter(filter);
    setCustomCards(
      filter.length === 0
        ? cards
        : cards.filter((i) => filter.includes(i.type.value))
    );
  };
  return (
    <Box mx={4} mb={10}>
      <Heading maxW={500} as="h1" size="xl" mb={5} fontFamily="Luckiest Guy">
        {title}
      </Heading>
      <Flex flexFlow="wrap" mb={10}>
        {categories.map((i, index) => (
          <Tag
            key={`tag-${index}`}
            size="md"
            borderRadius="full"
            variant="solid"
            colorScheme={currentFilter.includes(i.value) ? "pink" : "pink.500"}
            marginRight="2"
            marginBottom="2"
            onClick={() => handleChipClick(i.value)}
          >
            {i.displayValue}
          </Tag>
        ))}
      </Flex>
      <Flex
        className={`${styles.CosmeticCardTemplateGrid} ${
          isOpen ? styles.CosmeticCardTemplateGridOpen : ""
        }`}
      >
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(8, 1fr)",
          ]}
          gap={6}
          overflow="hidden"
        >
          {customCards.map((card, index) =>
            card.name === "TBD" ||
            card.description === "TBD" ||
            card.name === "null" ||
            card.description === "null" ? null : (
              <CosmeticCard
                id={card.id}
                bg="transparent"
                key={`card-${index}`}
                imgSrc={card.image}
                imgAlt={card.name.replace(/\s/g, "_")}
                action={() => true}
                title={card.name}
                description={card.description}
              />
            )
          )}
        </Grid>
        <Button
          onClick={handleClick}
          borderRadius="50%"
          width="40px"
          height="40px"
          padding="0"
          backgroundColor="pink"
          color="black"
          _hover={{ backgroundColor: "pink.500" }}
          pos="absolute"
          className={styles.ButtonCosmeticOpen}
        >
          {isOpen ? <MinusIcon /> : <AddIcon />}
        </Button>
      </Flex>
    </Box>
  );
};

export default CosmeticCardTemplate;
