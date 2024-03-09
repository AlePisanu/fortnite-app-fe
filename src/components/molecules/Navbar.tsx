import { useState } from "react";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Box,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { MenuList } from "../../utils/Menu";
import Logo from "../atoms/Logo";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={5}
    >
      <Logo
        src="https://media.graphassets.com/ddDDGPriQHC1OyGYRAKO"
        altName="Logo"
        size="90px"
      />
      <Flex w={"100%"} align="center" justifyContent="space-between" ml={5}>
        <Flex display={["none", "none", "flex", "flex"]}>
          {MenuList.map((item, index) => (
            <Link to={item.path} key={`menuD-${index}`}>
              <Button variant="ghost" aria-label={item.name} fontSize={20} my={5} w="100%">
                {item.name}
              </Button>
            </Link>
          ))}
        </Flex>

        <Switch
          color="green"
          isChecked={isDark}
          onChange={toggleColorMode}
          display={["none", "none", "flex", "flex"]}
        />

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />
        <Switch
          color="green"
          isChecked={isDark}
          onChange={toggleColorMode}
          display={["flex", "flex", "none", "none"]}
        />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        bgColor={isDark ? "gray.800" : "gray.50"}
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        p={5}
        ml={5}
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
            <Link to={item.path} key={`menuM-${index}`}>
              <Button variant="ghost" aria-label={item.name} my={5} w="100%">
                {item.name}
              </Button>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
