import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppTabsStackParamList, RootStackScreenProps } from '../../types';
import { HomeScreen } from 'screens/Home';
import { MessageScreen } from 'screens/Message';
import { AppTabsNavigationKey, RootNavigatekey } from './navigationKey';
import { Avatar, Box, Button, Icon, View, useTheme } from 'native-base';
import { useBackgroundColor } from 'hooks/index';
import { AccountScreen } from 'screens/Account';
import { AddTransactionScreeen } from 'screens/FloatButton';
import { BudgetScreen } from "screens/Budget";

const BottomTab = createBottomTabNavigator<AppTabsStackParamList>();

export default function AppTabsNavigator() {
  const { tabBarBackground } = useBackgroundColor();
  const { colors } = useTheme();
  return (
    <BottomTab.Navigator
      initialRouteName={AppTabsNavigationKey.Home}
      screenOptions={{
        headerShadowVisible: false,
        tabBarActiveTintColor: colors.primary[900],
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        // tabBarStyle: {
        // position: 'absolute',
        // },
        // tabBarBackground: () => <Box w="100%" h="100%" bg={tabBarBackground}></Box>,
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
          tabBarIcon: ({ color }) => <TabBarIcon name="comment" color={color} />,
        }}
      />
      <BottomTab.Screen
        name={AppTabsNavigationKey.FloatButton}
        component={AddTransactionScreeen}
        options={{
          title: AppTabsNavigationKey.FloatButton,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="plus" color={color} />
          ),
        }}
      // options={{
      //   title: AppTabsNavigationKey.FloatButton,
      //   tabBarButton: () => (
      //     <Button
      //       borderRadius={200}
      //       bottom="60%"
      //       h={16}
      //       w={16}
      //       shadow={1}
      //       onPress={() => console.log('adf')}
      //     >
      //       <Icon as={<FontAwesome />} name="plus" style={{ marginLeft: 4 }} color="white"></Icon>
      //     </Button>
      //   ),
      // }}
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
      <BottomTab.Screen
        name={AppTabsNavigationKey.Account}
        component={AccountScreen}
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
  return <FontAwesome size={20} {...props} />;
}
