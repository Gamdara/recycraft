import {
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function Login() {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  return (
    <div className="login">
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
          <Heading mb={6}>Log In</Heading>
          <Input
            placeholder="example@mail.com"
            variant="filled"
            mb={3}
            type="email"
          ></Input>
          <Input
            placeholder="*****"
            variant="filled"
            mb={6}
            type="password"
          ></Input>
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
