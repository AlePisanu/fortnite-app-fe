import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
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
    <Card className={styles.cosmeticCard} boxShadow="none" maxW="200px" minW="200px" onClick={() => action()} background="transparent">
      <CardBody p={0} objectFit="contain">
        <Image
          src={imgSrc}
          alt={imgAlt}
          borderRadius="lg"
        />
        <Stack mt="1" py={2} spacing={1}>
          <Heading size="md">{title}</Heading>
          <Text>
            {description}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CosmeticCard;
