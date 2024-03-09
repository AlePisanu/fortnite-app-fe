import React from "react";
import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";

interface HeroProps {
  backgroundImage: string;
  title: string;
  btnText: string;
  onPress: Function;
  textPosition: 'flex-start' | 'flex-end' | 'center';
  btnPosition: 'flex-start' | 'flex-end' | 'center';
}

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  title,
  btnText,
  onPress,
  btnPosition = 'flex-start',
  textPosition = 'flex-start',
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
      <Container maxW={"1200px"} px={[4, 4, 20, 20]}>
        <Flex justifyContent={textPosition} mb={5}>
          <Heading
            maxW={500}
            as="h1"
            size="xl"
            color="white"
            fontFamily="Rubik Mono One"
            textShadow="-3px 3px 0px black"
          >
            {title}
          </Heading>
        </Flex>
        <Flex justifyContent={btnPosition}>
          <Button colorScheme="pink" size="lg" onClick={() => onPress()}>
            <Text fontFamily="Luckiest Guy">{btnText}</Text>
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
