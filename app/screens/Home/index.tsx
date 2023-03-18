import { FontAwesome } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { APP_PADDING } from "app/constants/Layout";
import { AppBar } from "components/AppBar";
import { DropDownSelect } from "components/DropdownSelect";
import { useAppDispatch } from "hooks/index";
import {
  Avatar,
  Box,
  Button,
  Center,
  CheckIcon,
  Container,
  Flex,
  Icon,
  IconButton,
  Pressable,
  Select,
  Text,
  useColorMode,
  VStack,
  HStack,
  Image,
  ScrollView,
} from "native-base";
import {
  AppTabsNavigationKey,
  AuthNavigationKey,
} from "navigation/navigationKey";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import DropDownPicker from "react-native-dropdown-picker";
import { logout } from "slice/auth";
import { AppTabsStackScreenProps } from "types";

export const HomeScreen = (
  props: AppTabsStackScreenProps<AppTabsNavigationKey.Home>
) => {
  // hooks
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { toggleColorMode } = useColorMode();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);
  return (
    <Box h="full">
      <AppBar
        title={t("screen-title.home")}
        bg="primary.900"
        onPressDefaultLeftButton={() => props.navigation.openDrawer()}
      />
      <Box p={APP_PADDING} w="full" flex={1}>
       <Text>Welcome to Home</Text>
      </Box>
    </Box>
  );
};
