import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Divider,
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
    <Card maxW="sm">
      <CardBody>
        <Image src={imgSrc} alt={imgAlt} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Tag size="lg" colorScheme="pink" borderRadius="full">
          <TagLabel>{category}</TagLabel>
        </Tag>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
