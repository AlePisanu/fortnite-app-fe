import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getData } from "./api/Api";
import { ApiResponse } from "./api/interfaces/ApiResponse";
import { CosmeticsData } from "./api/interfaces/Cosmetics";
import { GetEndpoints } from "./api/endpoints";
import { setNews } from "./redux/slices/NewsSlice";
import { setCosmetics, setCosmeticsCategories } from "./redux/slices/CosmeticsSlice";
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
  const { t } = useTranslation();

  useEffect(() => {
    const getApiData = async () => {
      setIsLoading(true);

      try {
        const [newsResponse, cosmeticsResponse] = await Promise.all([
          getData<ApiResponse<NewsData>>(GetEndpoints("news")),
          getData<ApiResponse<CosmeticsData>>(GetEndpoints("newCosmetics")),
        ]);

        dispatch(setNews(newsResponse.data));
        dispatch(setCosmetics(cosmeticsResponse.data.items));
        dispatch(setCosmeticsCategories(cosmeticsResponse.data.items));
      } catch (error) {
        onOpen();
      } finally {
        setIsLoading(false);
      }
    };

    getApiData();
  }, [dispatch, onOpen]);

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
