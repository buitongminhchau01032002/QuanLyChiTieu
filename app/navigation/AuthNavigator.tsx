import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthStackParamList } from "../../types";
import { SignInScreen } from "../screens/SignIn";
import { SignUpScreen } from "../screens/SignUp";
import { AuthNavigationKey } from "./navigationKey";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AuthNavigationKey.SignIn} component={SignInScreen} />
      <Stack.Screen
        name={AuthNavigationKey.SignUp}
        component={SignUpScreen}
        options={{ headerShown: true, headerTitle: "Sign up" }}
      />
    </Stack.Navigator>
  );
}
