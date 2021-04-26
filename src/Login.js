import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Person, Lock } from "@material-ui/icons";
import React from "react";
import { ReactComponent as LoginSVG } from "./images/login image.svg";

function Login() {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  return (
    <div className="login">
      <Flex height="100vh" alignItems="center" justifyContent="start">
        <Flex background="gray.200" flex="0.7" justifyContent="center">
          <LoginSVG
            width="40vw"
            style={{
              transform: [{ scaleX: -1 }],
            }}
          ></LoginSVG>
        </Flex>

        <Flex
          direction="column"
          p={12}
          rounded={6}
          flex="0.3"
          justifyContent="center"
          background={formBackground}
        >
          <Heading mb={6} alignSelf="center">
            Log In
          </Heading>
          <InputGroup size="lg">
            <InputLeftElement children={<Person />} />
            <Input
              placeholder="example@mail.com"
              variant="filled"
              mb={3}
              type="email"
            ></Input>
          </InputGroup>
          <InputGroup size="lg">
            <InputLeftElement children={<Lock />} />
            <Input
              placeholder="*****"
              variant="filled"
              mb={6}
              type="password"
            ></Input>
          </InputGroup>
          <Button colorScheme="teal" mb={3}>
            Log In
          </Button>
          <Button onClick={toggleColorMode}>Toggle Color</Button>
        </Flex>
      </Flex>
    </div>
  );
}

export default Login;
