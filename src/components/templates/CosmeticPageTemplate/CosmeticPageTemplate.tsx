import { useEffect, useState } from "react";
import { Box, Grid, Flex, Spinner, Heading } from "@chakra-ui/react";
import SearchBar from "../../atoms/SearchBar/SearchBar";
import { GetEndpoints } from "../../../api/endpoints";
import { getData } from "../../../api/Api";
import { ApiResponse } from "../../../api/interfaces/ApiResponse";
import { filterCosmeticsByIds, mapCosmetics } from "../../../utils/Mapper";
import { Cosmetic } from "../../../utils/interfaces/Cosmetic.interface";
import CosmeticCard from "../../atoms/CosmeticsCard/CosmeticCard";
import { CosmeticsItem } from "../../../api/interfaces/Cosmetics";
import Pagination from "../../atoms/Pagination/Pagination";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

type CosmeticPageTemplateProps = {
  titleFavorite: string;
};

const CosmeticsTemplate = ({ titleFavorite }: CosmeticPageTemplateProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [filteredItems, setFilteredItems] = useState<Cosmetic[]>([]);
  const [defaultData, setDefaultdata] = useState<Cosmetic[]>([]);
  const [prefferedCosmetics, setPrefferedCosmetics] = useState<Cosmetic[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 20;
  const { i18n } = useTranslation();

  const favoritesCosmetics = useSelector(
    (state: any) => state.cosmeticsConfig.favoritesCosmetics
  );

  useEffect(() => {
    const getApiData = async () => {
      setIsLoading(true);
      try {
        const cosmeticsResponse = await getData<ApiResponse<CosmeticsItem[]>>(
          GetEndpoints("all")
        );

        const mappedCosmetics = mapCosmetics(cosmeticsResponse.data);
        setDefaultdata(mappedCosmetics);
        setFilteredItems(mappedCosmetics.slice(0, itemsPerPage));
        setPrefferedCosmetics(
          filterCosmeticsByIds(mappedCosmetics, favoritesCosmetics)
        );
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getApiData();
  }, [i18n.language]);

  useEffect(() => {
    setPrefferedCosmetics(
      filterCosmeticsByIds(defaultData, favoritesCosmetics)
    );
  }, [favoritesCosmetics]);

  const handleSearch = (value: string) => {
    const filtered = defaultData.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.description.toLowerCase().includes(value.toLowerCase())
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

  return (
    <Box mx={4} mb={10}>
      <Flex justifyContent="center" mb={10}>
        <SearchBar onInputChange={handleSearch} />
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mb={isLoading ? "30px" : "0"}
      >
        {isLoading ? (
          <Spinner size="xl" />
        ) : (
          <>
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(5, 1fr)",
              ]}
              gap={6}
              overflow="hidden"
            >
              {filteredItems.map((card, index) =>
                card.name === "TBD" ||
                card.description === "TBD" ||
                card.name === "null" ||
                card.description === "null" ? null : (
                  <CosmeticCard
                    id={card.id}
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
            <Pagination
              currentPage={page}
              onPageChange={handlePageChange}
              isNextDisabled={filteredItems.length < itemsPerPage}
              isPreviousDisabled={page === 1}
            />
          </>
        )}
      </Flex>

      {!isLoading && (
        <>
          <Heading
            maxW={500}
            as="h1"
            size="xl"
            mb={5}
            fontFamily="Luckiest Guy"
          >
            {titleFavorite}
          </Heading>
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            mb={isLoading ? "30px" : "0"}
          >
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
                "repeat(5, 1fr)",
              ]}
              gap={6}
              overflow="hidden"
            >
              {prefferedCosmetics.map((card, index) =>
                card.name === "TBD" ||
                card.description === "TBD" ||
                card.name === "null" ||
                card.description === "null" ? null : (
                  <CosmeticCard
                    id={card.id}
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
          </Flex>
        </>
      )}
    </Box>
  );
};

export default CosmeticsTemplate;
