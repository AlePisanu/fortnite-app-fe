import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text
} from "@chakra-ui/react";
import styles from './CosmeticCard.module.scss';

type CosmeticCardProps = {
  imgSrc?: string;
  imgAlt?: string;
  title: string;
  description?: string;
  action?: Function;
};

const CosmeticCard = ({
  imgSrc,
  imgAlt,
  title,
  description,
  action = () => void 0
}: CosmeticCardProps) => {
  return (
    <Card className={styles.cosmeticCard} boxShadow="none" onClick={() => action()} background="transparent">
      <CardBody p={0} objectFit="contain">
        <Image
          src={imgSrc}
          alt={imgAlt}
          borderRadius="lg"
          maxW="100px"
        />
        <Stack mt="1" py={2} spacing={1}>
          <Heading size="xs">{title}</Heading>
          <Text size="xs" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
            {description}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CosmeticCard;
