import React, { useEffect, useState } from "react";
import { Box, Grid, Flex } from "@chakra-ui/react";
import SearchBar from "../../atoms/SearchBar/SearchBar";
import { mapNews } from "../../../utils/Mapper";
import Pagination from "../../atoms/Pagination/Pagination";
import { NewsData } from "../../../api/interfaces/News";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { News } from "../../../utils/interfaces/News.interface";
import NewsCard from "../../atoms/NewsCard/NewsCard";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../communication/routes";
import NotFound from "../../atoms/NotFound/NotFound";

const NewsPageTemplate = () => {
  const [filteredItems, setFilteredItems] = useState<News[]>([]);
  const [defaultData, setDefaultdata] = useState<News[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 20;
  const news: NewsData = useSelector((state: any) => state.newsConfig.news);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const remappedNews = mapNews(news);
    if (remappedNews) setDefaultdata(remappedNews);
  }, [news]);

  const handleSearch = (value: string) => {
    const filtered = defaultData.filter(
      (item) =>
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.body.toLowerCase().includes(value.toLowerCase()) ||
        item.tabTitle.toLowerCase().includes(value.toLowerCase()) ||
        item.category.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filtered.slice(0, itemsPerPage));
    setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setFilteredItems(defaultData.slice(startIndex, endIndex));
  }, [page, defaultData]);

  const handleGoToNew = (id: string) => {
    navigate(`${routes.NEWS}/${id}`);
  };

  return (
    <Box mx={4} mb={10}>
      <Flex justifyContent="center" mb={10}>
        <SearchBar onInputChange={handleSearch} />
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mb="30px"
      >
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={6}
          overflow="hidden"
        >
          {filteredItems.map((card, index) => (
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
        {filteredItems.length > itemsPerPage && (
          <Pagination
            currentPage={page}
            onPageChange={handlePageChange}
            isNextDisabled={filteredItems.length < itemsPerPage}
            isPreviousDisabled={page === 1}
          />
        )}
        {filteredItems.length === 0 && <NotFound text={t("NotFoundText")} />}
      </Flex>
    </Box>
  );
};

export default NewsPageTemplate;
