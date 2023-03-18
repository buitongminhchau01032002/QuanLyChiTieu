import * as React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerNavigationOptions,
} from "@react-navigation/drawer";
import { AppDrawerStackParamList } from "types";
import {
  AppDrawerNavigationKey,
  AppTabsNavigationKey,
  RootNavigatekey,
} from "./navigationKey";
import AppTabsNavigator from "./AppTabsNavigator";
import {
  Avatar,
  Box,
  HStack,
  Icon,
  Pressable,
  Text,
  VStack,
  Image,
  Divider,
} from "native-base";
import { HomeScreen } from "screens/Home";
import { MessageScreen } from "screens/Message";
import { FontAwesome } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { APP_PADDING } from "app/constants/Layout";
import { localImages } from "app/constants/Images";
function CustomDrawerContent(
  props: React.ComponentProps<typeof DrawerItemList>
) {
  const { t } = useTranslation();
  return (
    <DrawerContentScrollView
      contentContainerStyle={{ paddingTop: 0 }}
      {...props}
    >
      
      
      <VStack p={APP_PADDING}>
        <Text>UIT - Team - V.1</Text>
        <Text>Hotline: (+84) 34 863 3796</Text>
      </VStack>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator<AppDrawerStackParamList>();
// DrawerNavigationOptions
export const AppDrawerNavigator = () => {
  const { t } = useTranslation();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name={AppDrawerNavigationKey.AppTabs}
        component={AppTabsNavigator}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon as={<FontAwesome name="home" />} size={6} color={color} />
          ),
          drawerLabel: t("drawer.general") as string,
        }}
      />
    </Drawer.Navigator>
  );
};
