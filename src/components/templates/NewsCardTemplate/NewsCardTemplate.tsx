import { Box, Heading, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NewsCard from "../../atoms/NewsCard/NewsCard";
import { NewsData } from "../../../api/interfaces/News";
import { News } from "../../../utils/interfaces/News.interface";
import { mapNews } from "../../../utils/Mapper";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../communication/routes";

type NewsCardTemplateProps = {
  title: string;
};

const NewsCardTemplate = ({ title }: NewsCardTemplateProps) => {
  const [customCards, setCustomCards] = useState<News[]>([]);
  const cards: NewsData = useSelector((state: any) => state.newsConfig.news);
  const navigate = useNavigate();

  useEffect(() => {
    if (cards && Object.keys(cards).length > 0) {
      const remappedCards = mapNews(cards);
      setCustomCards(remappedCards.slice(0, 6));
    }
  }, [cards]);

  const handleGoToNew = (id: string) => {
    navigate(`${routes.NEWS}/${id}`);
  };
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
            action={() => handleGoToNew(card.id)}
            title={card.title}
            category={card.category}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default NewsCardTemplate;
