import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeStackParamList } from "../../types";
import { SignInScreen } from "../screens/SignIn";
import { SignUpScreen } from "../screens/SignUp";
import { HomeNavigationKey } from "./navigationKey";
import { NotificationScreen } from "screens/Notification";

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={HomeNavigationKey.Notification}
        component={NotificationScreen}
        options={{ headerShown: true, headerTitle: "Sign up" }}
      />
    </Stack.Navigator>
  );
}
