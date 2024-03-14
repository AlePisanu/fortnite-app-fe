import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getData } from "./api/Api";
import { ApiResponse } from "./api/interfaces/ApiResponse";
import { CosmeticsNewData } from "./api/interfaces/Cosmetics";
import { GetEndpoints } from "./api/endpoints";
import { setNews } from "./redux/slices/NewsSlice";
import {
  setCosmeticsCategories,
  setFavoritesCosmetics,
  setLatestCosmetics,
} from "./redux/slices/CosmeticsSlice";
import FullScreenLoader from "./components/atoms/FullScreenLoader/FullScreenLoader";
import { NewsData } from "./api/interfaces/News";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";

const DataLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const favoritesCosmetics = JSON.parse(
      localStorage.getItem("favoritesCosmetics") || "[]"
    );
    dispatch(setFavoritesCosmetics(favoritesCosmetics));
  }, []);

  useEffect(() => {
    const getApiData = async () => {
      setIsLoading(true);
      try {
        const [newsResponse, newcosmeticsResponse] = await Promise.all([
          getData<ApiResponse<NewsData>>(GetEndpoints("news")),
          getData<ApiResponse<CosmeticsNewData>>(GetEndpoints("newCosmetics")),
        ]);

        dispatch(setNews(newsResponse.data));
        dispatch(setLatestCosmetics(newcosmeticsResponse.data.items));
        dispatch(setCosmeticsCategories(newcosmeticsResponse.data.items));
      } catch (error) {
        onOpen();
      } finally {
        setIsLoading(false);
      }
    };
    if (i18n.language) {
      getApiData();
    }
  }, [dispatch, onOpen, i18n.language]);

  return (
    <>
      {isLoading ? (
        <FullScreenLoader isLoading={isLoading} />
      ) : (
        <>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader></ModalHeader>
              <ModalCloseButton />
              <ModalBody mb={3}>
                <Flex align="center" direction="column" justifyContent="center">
                  <WarningTwoIcon boxSize={20} color="red.500" mb={4} />
                  <p>{t("ModalErrorApi")}</p>
                </Flex>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
};

export default DataLoader;
