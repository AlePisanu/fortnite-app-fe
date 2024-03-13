import { Flex, Text } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";

type NotFoundProps = {
  text?: string;
};

const NotFound = ({ text = "Not found" }: NotFoundProps) => {
  return (
    <Flex justifyContent="center" flexDirection="column" alignItems="center">
      <Text mb={10}>{text}</Text>
      <WarningIcon boxSize="100px" color="red" />
    </Flex>
  );
};

export default NotFound;
