import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppTabsStackParamList } from "../../types";
import { HomeScreen } from "screens/Home";
import { MessageScreen } from "screens/Message";
import { AppTabsNavigationKey } from "./navigationKey";
import { Box, useTheme } from "native-base";
import { useBackgroundColor } from "hooks/index";
import { BudgetScreen } from "screens/Budget";

const BottomTab = createBottomTabNavigator<AppTabsStackParamList>();

export default function AppTabsNavigator() {
  const { tabBarBackground } = useBackgroundColor();
  const { colors } = useTheme();
  return (
    <BottomTab.Navigator
      initialRouteName={AppTabsNavigationKey.Home}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary[900],
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: "bold",
        },
        tabBarStyle: {
          position: "absolute",
        },
        tabBarBackground: () => (
          <Box w="100%" h="100%" bg={tabBarBackground}></Box>
        ),
      }}
    >
      <BottomTab.Screen
        name={AppTabsNavigationKey.Home}
        component={HomeScreen}
        options={{
          title: AppTabsNavigationKey.Home,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={AppTabsNavigationKey.Message}
        component={MessageScreen}
        options={{
          title: AppTabsNavigationKey.Message,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="comment" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name={AppTabsNavigationKey.Budget}
        component={BudgetScreen}
        options={{
          title: AppTabsNavigationKey.Budget,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="comment" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={20} {...props} />;
}
