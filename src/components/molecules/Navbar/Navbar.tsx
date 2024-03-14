import { useState } from "react";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Box,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  MoonIcon,
  SunIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";
import { MenuList } from "../../../utils/Constants";
import Logo from "../../atoms/Logo/Logo";
import LangSwitch from "../../atoms/LangSwitch/LangSwitch";
import { useTranslation } from "react-i18next";
import { signOut } from "@aws-amplify/auth";
import { useDispatch } from "react-redux";
import { setLogged } from "../../../redux/slices/LoginSlice";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");
  const location = useLocation();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleSignOut = async () => {
    try {
      await signOut();
      dispatch(setLogged(false));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={5}
    >
      <Logo
        src={
          isDark
            ? "https://media.graphassets.com/ddDDGPriQHC1OyGYRAKO"
            : "https://i.pinimg.com/originals/9d/a2/c2/9da2c25957e90f0dbdaeda961af1e553.png"
        }
        altName="Logo"
        size="90px"
      />
      <Flex w={"100%"} align="center" justifyContent="space-between" ml={5}>
        <Flex display={["none", "none", "flex", "flex"]}>
          {MenuList.map((item, index) => (
            <Link to={item.path} key={`menuD-${index}`}>
              <Button
                variant="ghost"
                aria-label={item.name}
                fontSize={20}
                my={5}
                w="100%"
                color={location.pathname === item.path ? "pink" : "gray.500"}
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </Flex>

        <Flex align="center" display={["none", "none", "flex", "flex"]}>
          <Flex align="center" mx={6}>
            <SunIcon />
            <Switch
              color="green"
              isChecked={isDark}
              onChange={toggleColorMode}
              mx={2}
            />
            <MoonIcon />
          </Flex>
          <LangSwitch />
          <IconButton
            ml={5}
            aria-label="Log out"
            size="lg"
            icon={<ExternalLinkIcon />}
            onClick={() => handleSignOut()}
          />
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />
        <Flex align="center" display={["flex", "flex", "none", "none"]}>
          <Flex align="center" mx={6}>
            <SunIcon />
            <Switch
              color="green"
              isChecked={isDark}
              onChange={toggleColorMode}
              mx={2}
            />
            <MoonIcon />
          </Flex>
        </Flex>
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
              <Button
                variant="ghost"
                aria-label={item.name}
                my={5}
                w="100%"
                color={location.pathname === item.path ? "pink" : "gray.500"}
              >
                {item.name}
              </Button>
            </Link>
          ))}
          <LangSwitch />
          <IconButton
            mt={5}
            aria-label="Log out"
            size="lg"
            icon={<ExternalLinkIcon />}
            onClick={() => handleSignOut()}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
