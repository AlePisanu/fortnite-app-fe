import { Input, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

type SearchBarProps = {
  placeholder?: string;
  onInputChange: (value: string) => void;
};

const SearchBar = ({ placeholder = "...", onInputChange }: SearchBarProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onInputChange(value);
  };
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        color="gray.400"
        children={<SearchIcon />}
      />
      <Input
        placeholder={placeholder}
        bg="white"
        borderRadius="full"
        boxShadow="sm"
        color="black"
        onChange={handleInputChange}
        _hover={{ boxShadow: "md" }}
        _focus={{ boxShadow: "lg" }}
      />
    </InputGroup>
  );
};

export default SearchBar;
