
import { Box, Divider, Flex, Icon, Image, ScrollView, Spacer, Text, View } from "native-base";
import { AppBar } from "components/AppBar";
import React, { useState } from 'react';
import { APP_PADDING } from "app/constants/Layout";
import { AppTabsStackScreenProps } from 'types';
import { AppTabsNavigationKey } from 'navigation/navigationKey';
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { TabItem } from "./components/TabItem";
import Vi from "i18n/translations/vi";



export const BudgetScreen = (props: AppTabsStackScreenProps<AppTabsNavigationKey.Budget>) => {
    const [tabs, setTab] = useState([
        { title: '12/2022', value: true },
        { title: '1/2023', value: false },
        { title: '2/2023', value: false },
        { title: 'LAST MONTH', value: false },
        { title: 'THIS MONTH', value: false },
    ]);

    return (
        <Box h="full">
            <AppBar
                title="Budget"
                bg="primary.900"
                onPressDefaultLeftButton={() => props.navigation.openDrawer()}
                rightIcon={
                    <View
                        flexDirection={'row'}
                    >
                        <Icon as={<FontAwesome name="search" />} size={6} color="white" />
                        <Spacer width="4"></Spacer>
                        <FontAwesome5 name="wallet" size={24} color="white" />
                    </View>
                }
            />
            <View p={APP_PADDING} w="full" flex={1} flexDirection={'column'}>
                <ScrollView>

                    <ScrollView horizontal={true} marginBottom={4}>
                        {tabs.map((tab) =>
                            <TabItem key={tab.title} title={tab.title} isActive={tab.value} onPress={() => {
                                setTab(tabs.map((tabb) => {
                                    if (tabb == tab) { return { title: tabb.title, value: true } }
                                    else return { title: tabb.title, value: false }

                                }))
                            }}></TabItem>
                        )}
                    </ScrollView>

                    <View backgroundColor={'gray.200'} padding={4} borderRadius={16} >

                        <View flexDirection={'row'} shadow={1}>
                            <Text fontSize='lg' fontWeight={'bold'} marginBottom={1}>Total budget</Text>
                            <View flex={1}></View>
                            <Text fontSize='lg' bold={true}>28,282</Text>
                        </View>
                        <Text fontSize='md' color='gray.500'>1 budget</Text>
                        <Divider marginY={2} paddingY={0.25}></Divider>
                        <View flexDirection={'row'} shadow={1} marginBottom={1}>
                            <Text fontSize='md'>Spent</Text>
                            <View flex={1}></View>
                            <Text fontSize='md' color={'red.500'}>28,282</Text>
                        </View>
                        <View flexDirection={'row'} shadow={1}>
                            <Text fontSize='md'>Remain</Text>
                            <View flex={1}></View>
                            <Text fontSize='md' color={'blue.500'}>28,282</Text>
                        </View>
                    </View>

                    <Spacer height='10'></Spacer>

                    <View flexDirection={'row'}>
                        <Text fontSize='lg' marginBottom={1}>Total budget</Text>
                        <View flex={1}></View>
                        <View flexDirection={'row'} >
                            <Text fontSize={'lg'} marginRight={2} color={'green.500'}>New group</Text>
                            <Icon as={<FontAwesome name="plus-circle" />} size={6} color='green.500' />
                        </View>
                    </View>

                    <View flexDirection={'row'}>
                        <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} width={20} height={20} alt="description of image"></Image>
                        <Box flex={1} backgroundColor={'amber.100'} height={20} >
                            <Box width={'30'} height={'2'} backgroundColor={'red.200'} marginY={5}></Box>
                            <Box width={'30'} height={'2'} backgroundColor={'blue.200'}></Box>
                        </Box>
                    </View>

                </ScrollView>

            </View>
        </Box>
    );
};
