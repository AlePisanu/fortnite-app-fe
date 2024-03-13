import { Card, CardBody, Image, Stack, Heading, Text } from "@chakra-ui/react";
import styles from "./CosmeticCard.module.scss";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setFavoritesCosmetics } from "../../../redux/slices/CosmeticsSlice";

type CosmeticCardProps = {
  imgSrc?: string;
  imgAlt?: string;
  title: string;
  description?: string;
  action?: Function;
  bg?: string;
  id: string;
};

const CosmeticCard = ({
  imgSrc,
  imgAlt,
  title,
  description,
  action = () => void 0,
  bg = "",
  id,
}: CosmeticCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const favoritesCosmetics = useSelector(
    (state: any) => state.cosmeticsConfig.favoritesCosmetics
  );

  useEffect(() => {
    if (favoritesCosmetics) {
      setIsFavorite(favoritesCosmetics.includes(id));
    }
  }, [id]);

  const handleToggleFavorite = () => {
    if (favoritesCosmetics.includes(id)) {
      const updatedFavorites = favoritesCosmetics.filter(
        (fav: string) => fav !== id
      );
      dispatch(setFavoritesCosmetics(updatedFavorites));
      setIsFavorite(false);
    } else {
      const updatedFavorites = [...favoritesCosmetics, id];
      dispatch(setFavoritesCosmetics(updatedFavorites));
      setIsFavorite(true);
    }
  };
  return (
    <Card
      className={styles.cosmeticCard}
      boxShadow="none"
      onClick={() => action()}
      background={bg}
    >
      <CardBody p={bg || bg !== "transparent" ? "15px" : 0} objectFit="contain">
        <Image src={imgSrc} alt={imgAlt} borderRadius="lg" maxW="100px" />
        <Stack mt="1" py={2} spacing={1}>
          <Heading size="xs">{title}</Heading>
          <Text
            size="xs"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {description}
          </Text>
        </Stack>
      </CardBody>
      <FaHeart
        className={styles.iconButton}
        color={isFavorite ? "red" : "white"}
        onClick={handleToggleFavorite}
      />
    </Card>
  );
};

export default CosmeticCard;
