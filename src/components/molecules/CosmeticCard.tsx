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

type CosmeticCardProps = {
  imgSrc?: string;
  imgAlt?: string;
  title: string;
  description?: string;
  btnAction: Function;
};

const CosmeticCard = ({
  imgSrc,
  imgAlt,
  title,
  description,
  btnAction
}: CosmeticCardProps) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={imgSrc}
          alt={imgAlt}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>
            {description}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="ghost" colorScheme="blue" onClick={() => btnAction()}></Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default CosmeticCard;
