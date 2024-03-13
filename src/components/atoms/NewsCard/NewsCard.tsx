import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Tag,
  TagLabel,
  CardFooter,
} from "@chakra-ui/react";
import styles from "./NewsCard.module.scss";

type NewsCardProps = {
  imgSrc?: string;
  imgAlt?: string;
  title: string;
  action?: Function;
  category: string;
};

const NewsCard = ({
  imgSrc,
  imgAlt,
  title,
  action = () => void 0,
  category,
}: NewsCardProps) => {
  return (
    <Card
      className={styles.newsCard}
      ml="auto"
      mr="auto"
      maxW="sm"
      onClick={() => action()}
    >
      <CardBody>
        <Image src={imgSrc} alt={imgAlt} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
        </Stack>
      </CardBody>
      <CardFooter>
        <Tag size="lg" colorScheme="pink" borderRadius="full">
          <TagLabel fontWeight="bold" textTransform="uppercase">
            {category}
          </TagLabel>
        </Tag>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
