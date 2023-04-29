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
} from "native-base";
import Animated from "react-native-reanimated";
import { AuthStackScreenProps } from "../../../types";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
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

export const SignInScreen = ({
  navigation,
}: AuthStackScreenProps<AuthNavigationKey.SignIn>) => {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })



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
    <Box flex={1}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        flex={1}
        padding={12}
        w="full"
        alignSelf="center"
        alignItems="center"
        justifyContent="center">

        <VStack w='full' space={6} alignItems="center">
          <Text fontSize="20" fontWeight="bold"> Wellcome to our App!</Text>
          <Input
            size="xl"
            placeholder="Email"
            returnKeyType="next"
            value={email.value}
            onChangeText={(text) => setEmail({ value: text, error: '' })}
            autoCapitalize="none"
            autoComplete="email"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <Input
            size="xl"
            placeholder="Password"
            returnKeyType="done"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: '' })}
            secureTextEntry />

          <Button
            small
            primary
            w='full'
          >
            <Text fontWeight='bold' fontSize={16} color={"white"}>LOGIN</Text>
          </Button>
          <Box
            flexDirection='row'
            marginTop={2}>
            <Text>Don’t have an account? </Text>
            <Box >
              <Text color={"green.500"}>Sign up</Text>
            </Box>
          </Box>
        </VStack>
       
      </KeyboardAvoidingView>
    </Box>
  )
};
