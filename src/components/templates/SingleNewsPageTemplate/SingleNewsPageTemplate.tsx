import { useParams } from "react-router-dom";
import Article from "../../atoms/Article/Article";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NewsData } from "../../../api/interfaces/News";
import { News } from "../../../utils/interfaces/News.interface";
import { mapNews } from "../../../utils/Mapper";
import { Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const SingleNewsPageTemplate = () => {
  const [articleItem, setArticleItem] = useState<News | null>(null);
  const { newsParam } = useParams();
  const news: NewsData = useSelector((state: any) => state.newsConfig.news);
  const { t } = useTranslation();

  useEffect(() => {
    const remappedNews = mapNews(news).find((i) => i.id === newsParam);
    if (remappedNews) setArticleItem(remappedNews);
  }, [news]);
  return (
    <Box>
      {articleItem && (
        <Article
          categoryText={t("ArticleCategoryText")}
          category={articleItem.category}
          date={articleItem?.date}
          image={articleItem?.image}
          text={articleItem?.body}
          title={articleItem?.title}
        />
      )}
    </Box>
  );
};

export default SingleNewsPageTemplate;
