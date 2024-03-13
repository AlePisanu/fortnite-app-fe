import { Flex, Button, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface PaginationProps {
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
}

const Pagination = ({
  currentPage,
  isNextDisabled,
  isPreviousDisabled,
  onPageChange,
}: PaginationProps) => {
  return (
    <Flex justifyContent="center" align="center" mt={4}>
      <Button
        colorScheme="pink"
        onClick={() => onPageChange(currentPage - 1)}
        isDisabled={isPreviousDisabled}
        mr={2}
        borderRadius="50%"
        width="40px"
        height="40px"
        padding="0"
        color="black"
        _hover={{ backgroundColor: "pink.500" }}
      >
        <ChevronLeftIcon />
      </Button>
      <Text>{currentPage}</Text>
      <Button
        colorScheme="pink"
        onClick={() => onPageChange(currentPage + 1)}
        isDisabled={isNextDisabled}
        ml={2}
        borderRadius="50%"
        width="40px"
        height="40px"
        padding="0"
        color="black"
        _hover={{ backgroundColor: "pink.500" }}
      >
        <ChevronRightIcon />
      </Button>
    </Flex>
  );
};

export default Pagination;
