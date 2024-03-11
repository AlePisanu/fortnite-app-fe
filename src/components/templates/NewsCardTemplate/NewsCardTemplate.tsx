import styles from "./NewsCardTemplate.module.scss";
import { Flex, Box, Heading, Grid, Button, Tag } from "@chakra-ui/react";
import { Cosmetic } from "../../../utils/interfaces/Cosmetic.interface";
import { useEffect, useState } from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { CosmeticsType } from "../../../api/interfaces/Cosmetics";
import NewsCard from "../../atoms/NewsCard/NewsCard";
import { NewsData } from "../../../api/interfaces/News";
import { News } from "../../../utils/interfaces/News.interface";
import { mapNews } from "../../../utils/Mapper";

//TODO set Props considering an array of Cards
type NewsCardTemplateProps = {
  title: string;
};

const NewsCardTemplate: React.FC<NewsCardTemplateProps> = ({ title }) => {
  const [customCards, setCustomCards] = useState<News[]>([]);
  const cards: NewsData = useSelector((state: any) => state.newsConfig.news);

  useEffect(() => {
    if (cards && Object.keys(cards).length > 0) {
      console.log(cards);
      const remappedCards = mapNews(cards);
      setCustomCards(remappedCards);
    }
  }, [cards]);
  return (
    <Box mx={4} mb={10}>
      <Heading maxW={500} as="h1" size="xl" mb={5} fontFamily="Luckiest Guy">
        {title}
      </Heading>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={6}
      >
        {customCards.map((card, index) => (
          <NewsCard
            key={`card-${index}`}
            imgSrc={card.image}
            imgAlt={card.title.replace(/\s/g, "_")}
            action={() => true}
            title={card.title}
            category={card.category}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default NewsCardTemplate;
