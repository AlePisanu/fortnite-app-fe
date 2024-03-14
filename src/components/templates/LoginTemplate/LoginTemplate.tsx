import { useState } from "react";
import {
  Flex,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  FormControl,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import {
  ConfirmSignUpInput,
  confirmSignUp,
  signIn,
  signUp,
} from "aws-amplify/auth";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setLogged } from "../../../redux/slices/LoginSlice";

const LOGIN = "LOGIN";
const SIGNUP = "SIGNUP";
const OTP = "OTP";
const CONFIRM_SIGN_IN_PSW = "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED";
const CONFIRM_SIGN_UP = "CONFIRM_SIGN_UP";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const LoginTemplate = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otpCode, setOtp] = useState("");
  const [signInStep, setSignInStep] = useState(LOGIN);
  const [isError, setIsError] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleSetPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleSetUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUsername(value);
  };

  const handleSetOtp = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setOtp(value);
  };

  const handleSignIn = async ({ username, password }: any) => {
    try {
      const { isSignedIn, nextStep } = await signIn({ username, password });
      setIsSignedIn(isSignedIn);
      setIsError(false);
      if (isSignedIn) {
        dispatch(setLogged(isSignedIn));
      }
      if (!isSignedIn || nextStep.signInStep === CONFIRM_SIGN_IN_PSW) {
        setSignInStep(nextStep.signInStep);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  const handleSignUpConfirmation = async ({
    username,
    confirmationCode,
  }: ConfirmSignUpInput) => {
    setIsError(false);
    try {
      const { isSignUpComplete, nextStep } = await confirmSignUp({
        username,
        confirmationCode,
      });
      if (isSignUpComplete) {
        setSignInStep(LOGIN);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  const handleSignUp = async ({ username, password, email }: any) => {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username,
      password,
      options: {
        userAttributes: {
          email,
        },
      },
    });
    console.log(nextStep);
    if (nextStep.signUpStep === "CONFIRM_SIGN_UP") {
      setSignInStep(OTP);
    }
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Box minW={{ base: "90%", md: "468px" }}>
          {(signInStep === LOGIN ||
            signInStep === SIGNUP ||
            signInStep === OTP) && (
            <form
              onSubmit={(e) => {
                console.log(e);
                e.preventDefault();
                if (signInStep === LOGIN) handleSignIn({ username, password });
                if (signInStep === SIGNUP)
                  handleSignUp({ username, password, email: username });
                if (signInStep === OTP)
                  handleSignUpConfirmation({
                    username,
                    confirmationCode: otpCode,
                  });
              }}
            >
              <Stack spacing={4} p="1rem" boxShadow="md">
                <Text>{signInStep === LOGIN ? LOGIN : SIGNUP}</Text>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt />}
                    />
                    <Input
                      type="email"
                      placeholder="email address"
                      value={username}
                      onChange={handleSetUsername}
                    />
                  </InputGroup>
                </FormControl>
                {signInStep === OTP && (
                  <FormControl>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<CFaUserAlt />}
                      />
                      <Input
                        type="otp"
                        placeholder="otp code"
                        value={otpCode}
                        onChange={handleSetOtp}
                      />
                    </InputGroup>
                  </FormControl>
                )}
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaLock />}
                    />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={handleSetPassword}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="pink"
                  width="full"
                >
                  {signInStep === LOGIN
                    ? t("SignInButton")
                    : signInStep === SIGNUP
                    ? t("SignUpButton")
                    : t("OtpButton")}
                </Button>
              </Stack>
            </form>
          )}
        </Box>
      </Stack>
      {isError && (
        <Text color="red" fontWeight="bold" mb={2}>
          {t("LoginError")}
        </Text>
      )}
      {isSignedIn && (
        <Text color="green" fontWeight="bold" mb={2}>
          {t("LoggedIn")}
        </Text>
      )}
      <Box>
        <Text fontWeight="bold" onClick={() => setSignInStep(SIGNUP)}>
          {t("SignUpText")}
        </Text>
      </Box>
    </Flex>
  );
};

export default LoginTemplate;
