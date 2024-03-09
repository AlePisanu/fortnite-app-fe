import React from "react";
import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

interface HeroProps {
  backgroundImage: string;
  title: string;
  btnText: string;
  onPress: Function;
}

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  title,
  btnText,
  onPress,
}) => {
  return (
    <Box
      bgImage={`url(${backgroundImage})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      height="85vh"
      display="flex"
      alignItems="center"
      mb={5}
    >
      <Container maxW={"1200px"} px={20}>
        <Flex justifyContent="flex-start" mb={5}>
          <Heading
            maxW={500}
            as="h1"
            size="xl"
            color="white"
            fontFamily="Rubik Mono One"
          >
            {title}
          </Heading>
        </Flex>
        <Button colorScheme="pink" size="lg" onClick={() => onPress()}>
          <Text fontFamily="Luckiest Guy">{btnText}</Text>
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
