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
      <Image
        source={localImages.bg}
        position="absolute"
        w="full"
        h="full"
        resizeMode="cover"
        alt="bg"
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        flex={1}
      >
        <Formik
          initialValues={initFormValue}
          validationSchema={SignupSchema}
          onSubmit={handleSignIn}
        >
          {({ handleSubmit, errors, values, setFieldValue }) => (
            <Flex
              p={APP_PADDING * 2}
              flex="1"
              mt="20"
              justifyContent="space-between"
            >
              <ScrollView>
                <VStack space="lg" alignItems="center">
                  <HStack
                    w="full"
                    justifyContent="center"
                    alignItems="center"
                    space="4"
                    p="4"
                  >
                    <Pressable
                      onPressIn={() => {
                        setType(UserType.Parent);
                        parent.handler();
                      }}
                    >
                      <Animated.View style={[parent.animatedStyle]}>
                        <AvatarLogin
                          name={t(`sign-in-screen.parent`)}
                          isActive={type === UserType.Parent}
                          source={localImages.parentPlaceHoder}
                        />
                      </Animated.View>
                    </Pressable>
                    <Pressable
                      onPressIn={() => {
                        setType(UserType.Teacher);
                        teacher.handler();
                      }}
                    >
                      <Animated.View style={[teacher.animatedStyle]}>
                        <AvatarLogin
                          name={t(`sign-in-screen.teacher`)}
                          isActive={type === UserType.Teacher}
                          source={localImages.teacherPlaceHoder}
                        />
                      </Animated.View>
                    </Pressable>
                    <Pressable
                      onPressIn={() => {
                        setType(UserType.Driver);
                        driver.handler();
                      }}
                    >
                      <Animated.View style={[driver.animatedStyle]}>
                        <AvatarLogin
                          name={t(`sign-in-screen.driver`)}
                          isActive={type === UserType.Driver}
                          source={localImages.driverPlaceHoder}
                        />
                      </Animated.View>
                    </Pressable>
                  </HStack>
                  <FormControl isInvalid={Boolean(errors.username)}>
                    <Input
                      _input={{ color: "white" }}
                      value={values.username}
                      onChangeText={(text) => setFieldValue("username", text)}
                      placeholder={t("general.email") + "*"}
                      size="xl"
                      height="16"
                      borderLeftWidth={0}
                      borderRightWidth={0}
                      borderTopWidth={0}
                      InputLeftElement={
                        <Icon
                          as={<FontAwesome name="user" />}
                          size="lg"
                          color="gray.400"
                        />
                      }
                    />
                    <FormControl.ErrorMessage
                      _text={{
                        fontSize: "md",
                      }}
                      leftIcon={
                        <Icon
                          as={<FontAwesome name="exclamation-circle" />}
                          size="sm"
                        />
                      }
                    >
                      {errors.username}
                    </FormControl.ErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={Boolean(errors.password)}>
                    <Input
                      value={values.password}
                      _input={{ color: "white" }}
                      onChangeText={(text) => setFieldValue("password", text)}
                      placeholder={t("general.password") + "*"}
                      size="xl"
                      height="16"
                      type={show ? "text" : "password"}
                      borderLeftWidth={0}
                      borderRightWidth={0}
                      borderTopWidth={0}
                      InputLeftElement={
                        <Icon
                          as={<FontAwesome name="lock" />}
                          size="lg"
                          color="gray.400"
                        />
                      }
                      InputRightElement={
                        <Pressable
                          onPress={() => {
                            setShow((cur) => !cur);
                          }}
                          mr="5"
                        >
                          <Icon
                            as={
                              <FontAwesome name={show ? "eye" : "eye-slash"} />
                            }
                            size="lg"
                            color="gray.400"
                          />
                        </Pressable>
                      }
                    />
                    <FormControl.ErrorMessage
                      _text={{
                        fontSize: "md",
                      }}
                      leftIcon={
                        <Icon
                          as={<FontAwesome name="exclamation-circle" />}
                          size="sm"
                        />
                      }
                    >
                      {errors.password}
                    </FormControl.ErrorMessage>
                  </FormControl>
                  <Checkbox
                    value={"isAcceptTerm"}
                    defaultIsChecked={true}
                    onChange={setIsAcceptTerm}
                    accessibilityLabel="This is a dummy checkbox"
                    colorScheme="blue"
                  >
                    <Link
                      _text={{
                        color: "white",
                      }}
                    >
                      {t("sign-in-screen.terms-accept")}
                    </Link>
                  </Checkbox>
                  <CButton
                    w="full"
                    isLoading={isLoadingLoginAction}
                    _text={{
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      fontSize: "md",
                      color: "white",
                    }}
                    onPress={() => handleSubmit()}
                  >
                    {t("sign-in-screen.sign-in")}
                  </CButton>
                  <Link _text={{ color: "white" }}>
                    {t("sign-in-screen.forgot-password")}
                  </Link>
                  <CButton
                    w="full"
                    variant="outline"
                    _text={{
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      fontSize: "md",
                    }}
                    leftIcon={
                      <Icon
                        as={<FontAwesome name="qrcode" />}
                        size="lg"
                        color={"orange.900"}
                      />
                    }
                    onPress={() => handleSubmit()}
                  >
                    {t("sign-in-screen.qr-sign-in")}
                  </CButton>
                </VStack>
              </ScrollView>
              <Text
                fontSize="md"
                color="white"
                textAlign="center"
                bold
                mt={APP_PADDING}
              >
                {t("sign-in-screen.contact-help", {
                  number: CONTACT_NUMBER,
                })}
              </Text>
            </Flex>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </Box>
  );
};
