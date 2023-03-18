/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { DrawerScreenProps } from "@react-navigation/drawer";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  RootNavigatekey,
  AppTabsNavigationKey,
  AuthNavigationKey,
  AppDrawerNavigationKey,
} from "navigation/navigationKey";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
// params type
export type AppTabsStackParamList = {
  [AppTabsNavigationKey.Home]: undefined;
  [AppTabsNavigationKey.Message]: undefined;
};

export type AuthStackParamList = {
  [AuthNavigationKey.SignIn]: undefined;
  [AuthNavigationKey.SignUp]: undefined;
};

export type AppDrawerStackParamList = {
  [AppDrawerNavigationKey.AppTabs]:
    | NavigatorScreenParams<AppTabsStackParamList>
    | undefined;
};

export type RootStackParamList = {
  [RootNavigatekey.AppDrawer]:
    | NavigatorScreenParams<AppDrawerStackParamList>
    | undefined;
  [RootNavigatekey.Auth]: NavigatorScreenParams<AuthStackParamList> | undefined;
  [RootNavigatekey.MessageDetail]: undefined;
  [RootNavigatekey.NotFound]: undefined;
  [RootNavigatekey.Intro]: undefined;
  [RootNavigatekey.Modal]: undefined;
};
// props type
export type AppTabsStackScreenProps<
  Screen extends keyof AppTabsStackParamList
> = CompositeScreenProps<
  BottomTabScreenProps<AppTabsStackParamList, Screen>,
  CompositeScreenProps<
    DrawerScreenProps<AppDrawerStackParamList>,
    NativeStackScreenProps<RootStackParamList>
  >
>;

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

// export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
// NativeStackScreenProps<RootStackParamList & AuthStackParamList, T>;

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

// export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
// NativeStackScreenProps<RootStackParamList, Screen>;
