import React from 'react';
import { Input, InputGroup, InputLeftElement, Icon } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

type SearchBarProps = {
    placeholder?: string
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "..." }) => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        color="gray.400"
        children={<SearchIcon/>}
      />
      <Input
        placeholder={placeholder}
        bg="white"
        borderRadius="full"
        boxShadow="sm"
        _hover={{ boxShadow: "md" }}
        _focus={{ boxShadow: "lg" }}
      />
    </InputGroup>
  );
};

export default SearchBar;
