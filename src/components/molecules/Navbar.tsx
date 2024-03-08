import { useState } from "react";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { MenuList } from "../../utils/Menu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");
  return (
    <Flex>
      <Flex position="fixed" top="1rem" right="1rem" align="center">
        <Container maxW="1200px" width={"100%"}>
          <Flex display={["none", "none", "flex", "flex"]}>
            {MenuList.map((item, index) => (
              <Link to={item.path}>
                <Button
                  as="a"
                  variant="ghost"
                  aria-label={item.name}
                  my={5}
                  w="100%"
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </Flex>
        </Container>
        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />
        <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          {MenuList.map((item, index) => (
            <Link to={item.path}>
              <Button
                as="a"
                variant="ghost"
                aria-label={item.name}
                my={5}
                w="100%"
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
