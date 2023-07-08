import { StatusBar } from 'expo-status-bar';
import { Avatar, Button, Flex, HStack, Pressable, ScrollView, Text, VStack, View } from 'native-base';
import { AppTabsNavigationKey } from 'navigation/navigationKey';
import React from 'react';
import { AppTabsStackScreenProps } from 'types';
import Constants from 'expo-constants';
import { Entypo, Ionicons, Octicons } from '@expo/vector-icons';

export const TransactionScreen = (props: AppTabsStackScreenProps<AppTabsNavigationKey.Transaction>) => {
    return (
        <View paddingTop={Constants.statusBarHeight / 4} backgroundColor="white">
            <VStack backgroundColor="white" alignItems="center" position="relative" paddingTop={2} paddingBottom={3}>
                <Text fontSize="sm" color="gray.500">
                    Số dư
                </Text>
                <Text fontWeight="semibold" fontSize="md">
                    2,884,000 ₫
                </Text>

                <Pressable onPress={() => console.log('Open wallet popup!')}>
                    <HStack
                        marginTop={1}
                        alignItems="center"
                        paddingX={3}
                        borderRadius={8}
                        paddingY={2}
                        backgroundColor="gray.100"
                        space={1.5}
                    >
                        <Avatar size={6} bgColor="red.600"></Avatar>
                        <Text fontSize="xs" fontWeight="semibold">
                            Tiền mặt
                        </Text>
                        <Octicons name="triangle-down" size={18} color="#555" />
                    </HStack>
                </Pressable>

                {/* RIGHT BUTTON */}
                <HStack position="absolute" top={4} right={4} alignItems="center" space={4}>
                    <Ionicons name="search" size={24} color="black" />
                    <Entypo name="dots-three-vertical" size={20} color="black" />
                </HStack>
            </VStack>
            <ScrollView backgroundColor="gray.100">
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
                <Text>fasdfasdf</Text>
            </ScrollView>
        </View>
    );
};
