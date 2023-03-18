import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Heading,
  HStack,
  Icon,
  Input,
  Link,
  Text,
  useTheme,
  useToast,
  VStack,
} from "native-base";
import { AuthStackScreenProps } from "../../../types";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { AuthNavigationKey } from "navigation/navigationKey";

export const SignUpScreen = ({
  navigation,
}: AuthStackScreenProps<AuthNavigationKey.SignUp>) => {
  const [email, setEmail] = useState("dev@dev.de");
  const [password, setPassword] = useState("dev123");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const onClickSignin = async () => {
    setLoading(true);
    navigation.navigate(AuthNavigationKey.SignIn);
  };

  return (
    <Flex safeArea>
      <Center h={"full"}>
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          >
            Welcome
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            Sign up to continue!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                value={email}
                onChangeText={setEmail}
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="mail" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                type="password"
                value={password}
                onChangeText={setPassword}
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="lock" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
              />
            </FormControl>
            <Button
              mt="2"
              colorScheme="indigo"
              onPress={() => onClickSignin()}
              leftIcon={
                <Icon as={<MaterialIcons name="login" />} size={5} ml="2" />
              }
              isLoading={loading}
            >
              Sign up
            </Button>
          </VStack>
        </Box>
      </Center>
    </Flex>
  );
};
