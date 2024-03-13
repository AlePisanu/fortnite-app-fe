import React from "react";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface ArticleProps {
  title: string;
  image: string;
  text: string;
  date?: string;
  category: string;
  categoryText: string;
}

const Article = ({
  title,
  image,
  text,
  date,
  category,
  categoryText,
}: ArticleProps) => {
  return (
    <Box p="4" mb="4">
      <Box>
        <Text fontWeight="bold" fontSize="10px">
          {date}
        </Text>
      </Box>
      <Box>
        <Text display="flex">
          {categoryText}
          <Text fontWeight="bold" as="h4" textTransform="uppercase">
            {category}
          </Text>
        </Text>
      </Box>
      <Heading as="h1" mb="4">
        {title}
      </Heading>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "flex-start" }}
      >
        <Image
          src={image}
          w={{ base: "100%", md: "40%" }}
          mr={{ base: 0, md: "4" }}
          mb={{ base: "4", md: 0 }}
        />
        <Text>{text}</Text>
      </Flex>
    </Box>
  );
};

export default Article;
