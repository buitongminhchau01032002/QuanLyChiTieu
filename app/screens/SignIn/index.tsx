import {
  Box,
  Flex,
  FormControl,
  HStack,
  Icon,
  Input,
  Link,
  Text,
  useToast,
  VStack,
  Image,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  Checkbox,
  Button,
  Center,
  Heading,
} from "native-base";
import Animated from "react-native-reanimated";
import { AuthStackScreenProps } from "../../../types";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { AuthNavigationKey } from "navigation/navigationKey";
import { localImages } from "app/constants/Images";
import { CONTACT_NUMBER } from "config/config.base";
import { Platform } from "react-native";
import { UserType } from "models/User";
import { useLoginMutation } from "services/api/Entrance";
import { CButton } from "components/Button";
import { APP_PADDING } from "app/constants/Layout";
import { AvatarLogin } from "./components/AvatarLogin";
import { useLoginAnimation } from "./hooks";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { emailValidator } from "app/helpers/emailValidator";
import { passwordValidator } from "app/helpers/passwordValidator";
export const SignInScreen = ({
  navigation,
}: AuthStackScreenProps<AuthNavigationKey.SignIn>) => {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [loading, setLoading] = useState(false);

  const onClickSignin = async () => {
    navigation.navigate(AuthNavigationKey.SignUp);
  };

  const onLoginPressed = () => {
    
    const emailError = emailValidator(email.value)
   // const passwordError = passwordValidator(password.value)
    if (emailError || password.value) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: 'Please enter your Password' })
      return
    }
    //code bla bla 
   
  }
  // hooks
  const { t } = useTranslation();
  const toast = useToast();
  const { parent, teacher, driver } = useLoginAnimation();
  // states
  const [type, setType] = useState(UserType.Parent);
  const [show, setShow] = React.useState(false);
  const [isAcceptTerm, setIsAcceptTerm] = useState(true);
  const initFormValue = {
    username: "",
    password: "",
    type: UserType.Parent,
    platform: Platform.OS,
  };
  // rtk query
  const [loginAction, { isLoading: isLoadingLoginAction }] = useLoginMutation();
  // actions
  const handleSignIn = async (values: typeof initFormValue) => {
    if (!isAcceptTerm) {
      toast.show({
        title: t("sign-in-screen.terms-warning"),
        bg: "error.900",
      });
      return;
    }
    loginAction({ ...values, type })
      .unwrap()
      .then((values) => {
        toast.show({
          title: t("general.successfully"),
          description: t("sign-in-screen.welcome"),
          bg: "success.400",
        });
      })
      .catch((err) => {
        console.log(err);

        toast.show({
          title: "Fail",
          description: "hello",
          bg: "error.900",
        });
      });
    // setLoading(true);
  };
  // schema validation
  const SignupSchema = Yup.object().shape({
    username: Yup.string().required(t("general.required-field") ?? ""),
    password: Yup.string().required(t("general.required-field") ?? ""),
  });
  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      flex={1}
      p={12}
      w="full"
      alignSelf="center"
      justifyContent="center">

      <Flex safeArea flex={1}>
        <Center justifyContent='center' w='full' >
          <Box flexDirection="column" safeArea p="2" py="8" w="full">
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
              Sign In to continue!
            </Heading>

            <VStack space={3} mt="5" >
              <FormControl  isRequired isInvalid={email.error.length > 0}>
                <FormControl.Label>Email</FormControl.Label>
                <Input
                  value={email.value}
                  onChangeText={value => setEmail({ value: value, error: '' })}
                  placeholder=" Email"
                  size='lg'
                  InputLeftElement={
                    <Icon
                      as={<MaterialIcons name="mail" />}
                      size={5}
                      ml="2"
                      color="muted.400"
                    />
                  }/>
                 {'error' in email ? <FormControl.ErrorMessage>{email.error}</FormControl.ErrorMessage> : null}
              </FormControl>
              <FormControl
              isRequired isInvalid={password.error.length > 0}
              >
                <FormControl.Label>Password</FormControl.Label>
                <Input
                  value={password.value}
                  onChangeText={value => setPassword({ value: value, error: '' })}
                  placeholder=" Password"
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
                size='lg'
                // colorScheme="indigo"
                onPress={() => onLoginPressed()}
              
                isLoading={loading}
              >
               Login
              </Button>
              <Flex
                flexDirection='row'
                justifyContent='center'
                marginTop={2}
                >
                <Text>Don’t have an account? </Text>
                <Text color={"green.500"} onPress={() => onClickSignin()}>Sign up</Text>
              </Flex>
              
          </VStack> 
        </Box>
    </Center> 
        </Flex> 
        
      </KeyboardAvoidingView>
  ) 
};
