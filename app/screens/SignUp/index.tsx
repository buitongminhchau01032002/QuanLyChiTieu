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
    Pressable
} from "native-base";
import { AuthStackScreenProps } from "../../../types";
import { useState } from "react";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { AuthNavigationKey } from "navigation/navigationKey";
import { emailValidator } from "app/helpers/emailValidator";
import { passwordValidator } from "app/helpers/passwordValidator";
import {usernameValidator} from "app/helpers/usernameValidator";


export const SignUpScreen = ({
    navigation,
}: AuthStackScreenProps<AuthNavigationKey.SignUp>) => {
    const [email, setEmail] =  useState({ value: '', error: '' })
    const [username, setUsername] =  useState({ value: '', error: '' })
    const [password, setPassword] =  useState({ value: '', error: '' })
    const [loading, setLoading] = useState(false);
    const [show, setShow] = React.useState(false);
    const toast = useToast();

    const onRegisterPressed = () => {
    
        const usernameError = usernameValidator(username.value)
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError) {
          setUsername({ ...username, error: usernameError })
          setEmail({ ...email, error: emailError })
          setPassword({ ...password, error: passwordError })
          return
        }
       //blablabla
       navigation.replace(AuthNavigationKey.SignIn)
      }

    return (
        <Flex safeArea flex={1}>
            <Center  alignItems='center' w='full' pl={12} pr={12} >
                <Box flexDirection="column" safeArea p="2" w="full" >
                    <Heading
                        textAlign="center"
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
                        textAlign="center"
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

                    <VStack space={3} mt="5" >
                    <FormControl  isRequired isInvalid={username.error.length > 0}>
                            <FormControl.Label>Username</FormControl.Label>
                            <Input
                                value={username.value}
                                onChangeText={value => setUsername({ value: value, error: '' })}
                                placeholder="User name"
                                size='lg'
                                InputLeftElement={
                                    <Icon
                                        as={<FontAwesome name="user" />}
                                        size={5}
                                        ml="2"
                                        color="muted.400"
                                    />
                                }
                            />
                             {'error' in username ? <FormControl.ErrorMessage>{username.error}</FormControl.ErrorMessage> : null}
                        </FormControl>
                        <FormControl  isRequired isInvalid={email.error.length > 0}>
                            <FormControl.Label>Email</FormControl.Label>
                            <Input
                             autoCapitalize="none"
                                value={email.value}
                                onChangeText={value => setEmail({ value: value, error: '' })}
                                placeholder="New Email"
                                size='lg'
                                InputLeftElement={
                                    <Icon
                                        as={<MaterialIcons name="mail" />}
                                        size={5}
                                        ml="2"
                                        color="muted.400"
                                    />
                                }
                            />
                             {'error' in email ? <FormControl.ErrorMessage>{email.error}</FormControl.ErrorMessage> : null}
                        </FormControl>
                        <FormControl
                         isRequired isInvalid={password.error.length > 0}
                        >
                            <FormControl.Label>Password</FormControl.Label>
                            <Input

                                value={password.value}
                                onChangeText={value => setPassword({ value: value, error: '' })}
                                placeholder="New Password"
                                size='lg'
                                InputLeftElement={
                                    <Icon
                                        as={<MaterialIcons name="lock" />}
                                        size={5}
                                        ml="2"
                                        color="muted.400"
                                    />
                                }
                                type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                                    <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                                </Pressable>}
                            />
                             {'error' in password ? <FormControl.ErrorMessage>{password.error}</FormControl.ErrorMessage> : null}
                        </FormControl>
                        
                        <Button
                            mt="2"
                            // colorScheme="indigo"
                           onPress={() => onRegisterPressed()}
                           size='lg'
                            // leftIcon={
                            //     <Icon as={<MaterialIcons name="login" />} size={5} ml="2" />
                            // }
                            isLoading={loading}
                        >
                           Register
                        </Button>
                       
                        
                    </VStack>
                </Box>
            </Center>
        </Flex>
    );
};
