import { FontAwesome } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { APP_PADDING } from 'app/constants/Layout';
import { FontAwesome5 } from '@expo/vector-icons';

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
    Input,
} from 'native-base';
import { AppTabsNavigationKey, AuthNavigationKey, RootNavigatekey } from 'navigation/navigationKey';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { AppTabsStackScreenProps } from 'types';

type MenuItem = {
    title: string;
    icon: React.ReactNode;
    extra?: React.ReactNode;
    onPress?: () => void;
};

export const AddTransactionScreeen = (props: AppTabsStackScreenProps<AppTabsNavigationKey.FloatButton>) => {
    // navigation
    const { navigation } = props;
    // hooks
    const [money, setMoney] = useState("");
    const [group, setGroup] = useState("");
    const [note, setNote] = useState("");
    const [date, setDate] = useState("");
    const [wallet, setWallet] = useState("");
    const [people, setPeople] = useState("");
    const [event, setEvent] = useState("");
    const [remind, setRemind] = useState("");

    useEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <HStack
                    space={5}
                >
                    <Text >Save</Text>
                    <Text></Text>
                </HStack>
            ),
        });
    }, [props.navigation]);

    return (
        <Box h="full" p={APP_PADDING} bg="white">
            <ScrollView>
                <VStack space={2}>
                    <VStack space={10}>
                        <VStack >
                            <Input value={money}
                                onChangeText={(text) => setMoney(text)}
                                placeholder={"0"}
                                placeholderTextColor="green.500"
                                size="2xl"
                                height="20"
                                color="green.500"
                                paddingLeft={10}
                                borderLeftWidth={0}
                                borderRightWidth={0}
                                borderTopWidth={0}
                            ></Input>
                            <Input value={group}
                                onChangeText={(text) => setGroup(text)}
                                placeholder={"Chọn nhóm"}
                                size="xl"
                                height="16"
                                borderLeftWidth={0}
                                borderRightWidth={0}
                                borderTopWidth={0}
                                InputLeftElement={
                                    <FontAwesome5 name="question" size={24} />
                                }></Input>

                            <Input
                                value={note}
                                onChangeText={(text) => setNote(text)}
                                placeholder={"Thêm ghi chú"}
                                size="2xl"
                                height="16"
                                borderLeftWidth={0}
                                borderRightWidth={0}
                                borderTopWidth={0}
                                InputLeftElement={
                                    <FontAwesome5 name="align-justify" size={24} />
                                }></Input>
                            <Input
                                value={date}
                                onChangeText={(text) => setDate(text)}
                                placeholder={"Hôm nay"}
                                size="2xl"
                                height="16"
                                borderLeftWidth={0}
                                borderRightWidth={0}
                                borderTopWidth={0}
                                InputLeftElement={
                                    <FontAwesome5 name="calendar" size={24} />
                                }></Input>
                            <Input
                                value={wallet}
                                onChangeText={(text) => setWallet(text)}
                                placeholder={"Chọn ví"}
                                size="2xl"
                                height="16"
                                borderLeftWidth={0}
                                borderRightWidth={0}
                                borderTopWidth={0}
                                InputLeftElement={
                                    <FontAwesome5 name="wallet" size={24} />
                                }></Input>
                            <Input
                                value={people}
                                onChangeText={(text) => setPeople(text)}
                                placeholder={"Với"}
                                size="2xl"
                                height="16"
                                borderLeftWidth={0}
                                borderRightWidth={0}
                                borderTopWidth={0}
                                InputLeftElement={
                                    <FontAwesome5 name="users" size={24} />
                                }></Input>
                            <Input
                                value={event}
                                onChangeText={(text) => setEvent(text)}
                                placeholder={"Chọn sự kiện"}
                                size="2xl"
                                height="16"
                                borderLeftWidth={0}
                                borderRightWidth={0}
                                borderTopWidth={0}
                                InputLeftElement={
                                    <FontAwesome5 name="calendar-check" size={24} />
                                }></Input>
                            <Input
                                value={remind}
                                onChangeText={(text) => setRemind(text)}
                                placeholder={"Đặt nhắc nhở"}
                                size="2xl"
                                height="16"
                                borderLeftWidth={0}
                                borderRightWidth={0}
                                borderTopWidth={0}
                                InputLeftElement={
                                    <FontAwesome5 name="clock" size={24} />
                                }></Input>

                        </VStack>

                        <TouchableOpacity>
                            <Center position="relative">
                                <HStack space={20}>
                                    <VStack alignItems="center" space={1}>

                                        <TouchableOpacity>
                                            <Avatar size="lg" bg="primary.900">
                                                <Icon as={<FontAwesome />} name="photo" color={"white"}></Icon>
                                            </Avatar>
                                        </TouchableOpacity>

                                    </VStack>
                                    <VStack alignItems="center" space={1}>

                                        <TouchableOpacity>
                                            <Avatar size="lg" bg="primary.900">
                                                <Icon as={<FontAwesome />} name="camera" color={"white"}></Icon>
                                            </Avatar>
                                        </TouchableOpacity>

                                    </VStack>
                                </HStack>


                            </Center>
                        </TouchableOpacity>

                    </VStack>
                </VStack>
            </ScrollView>
        </Box>
    );
};
