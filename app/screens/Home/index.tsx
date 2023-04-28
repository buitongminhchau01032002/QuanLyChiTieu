import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { APP_PADDING } from 'app/constants/Layout';
import { AppBar } from 'components/AppBar';
import { DropDownSelect } from 'components/DropdownSelect';
import { useAppDispatch } from 'hooks/index';
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
    Spacer,
    View,
    Divider,
} from 'native-base';
import { AppTabsNavigationKey, AuthNavigationKey } from 'navigation/navigationKey';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { logout } from 'slice/auth';
import { AppTabsStackScreenProps } from 'types';

export const HomeScreen = (props: AppTabsStackScreenProps<AppTabsNavigationKey.Home>) => {
    // hooks
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { toggleColorMode } = useColorMode();
    const [isTotalRevealed, setIsTotalReveal] = useState(true)
    const [money, setMoney] = useState(32.12);

    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
    ]);

    useEffect(() => {
        props.navigation.setOptions({
            headerLeft: () => (
                <HStack
                    space={2}
                >
                    <Icon as={<FontAwesome name="bars" />} size={6} color="black" marginLeft={4} />
                </HStack>
            ),
            // headerRight: () => (
            //     // <Box></Box>
            // )

        });
    }, [props.navigation]);
    return (
        <Box h="full" p={APP_PADDING} w="full" flex={1} flexDirection={'column'}>
            <View flexDirection='row' justifyContent={'space-between'} alignItems={'center'}>
                <View flexDirection={'row'} alignItems={'center'}>
                    {isTotalRevealed ?
                        <Text fontWeight="semibold" fontSize={26}>{money.toFixed(2)} đ</Text>
                        : <Text fontWeight="semibold" fontSize={26}>******** </Text>
                    }
                    <TouchableOpacity onPress={() => {
                        setIsTotalReveal(!isTotalRevealed)
                    }}>
                        {isTotalRevealed ?
                            <Icon as={<FontAwesome name="eye" />} size={6} color="black" marginLeft={4} />
                            : <Icon as={<FontAwesome name="eye-slash" />} size={6} color="black" marginLeft={4} />
                        }

                    </TouchableOpacity>

                </View>
                <TouchableOpacity onPress={() => { /*notification screen*/ }} >
                    <Icon as={<FontAwesome name="bell" />} size={6} color="black" marginLeft={4} />
                </TouchableOpacity>
            </View>
            <Text>Total money</Text>

            <View backgroundColor={'white'} padding={4} borderRadius={16} marginY={2}>

                <View flexDirection={'row'} justifyContent={'space-between'} >
                    <Text fontSize='lg' fontWeight={'semibold'} >My wallet</Text>
                    <Text fontSize='md' fontWeight={'semibold'} color={'green.500'}>View all</Text>
                </View>


                <Divider marginY={4} paddingY={0.25} ></Divider>

                <View flexDirection={'row'} shadow={1} justifyContent={'space-between'} alignItems={'center'}>
                    <View flexDirection={'row'} shadow={1} justifyContent={'space-between'} alignItems={'center'}>
                        <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} width={20} height={20} alt="description of image" borderRadius={50} size={10}></Image>
                        <Text fontWeight="semibold" fontSize='lg' marginLeft={2}>Tiền mặt</Text>
                    </View>
                    <Text fontWeight="semibold" fontSize='md'> {money.toFixed(2)} đ</Text>
                </View>
            </View>

            <View flexDirection={'row'} justifyContent={'space-between'} >
                <Text fontSize='md'  >Expensive report</Text>
                <Text fontSize='md' fontWeight={'semibold'} color={'green.500'}>View report</Text>
            </View>

            <View backgroundColor={'white'} padding={4} borderRadius={16} marginY={2} >
                <View backgroundColor={'gray.100'} padding={1} borderRadius={16} marginY={2} flexDirection={'row'}>
                    <View flexGrow={1} backgroundColor={'white'} borderRadius={16}>
                        <Text textAlign={'center'}>Week</Text>
                    </View>
                    <View flexGrow={1} borderRadius={16} >
                        <Text textAlign={'center'}>Month</Text>
                    </View>
                </View>
                <Text fontWeight={'semibold'} fontSize={'lg'}>{money.toFixed(2)} đ</Text>
                <Text fontSize={'md'} color={'gray.500'}>Total expenditure</Text>
                <View marginX={8}>
                    <View height={40} flexDirection={'row'} alignItems={'flex-end'} >
                        <View height={40} flexDirection={'row'} justifyContent={'space-evenly'} alignItems={'flex-end'} flex={'1'}>
                            <View height={'100%'} width={16} backgroundColor={'red.100'} borderTopRadius={10}></View>
                            <View height={'60%'} width={16} backgroundColor={'red.500'} borderTopRadius={10}></View>
                        </View>
                        <View justifyContent={"space-between"} height={"100%"}>
                            <Text>1</Text>
                            <Text>2</Text>
                        </View>
                    </View>
                    <Divider />
                    <View flexDirection={'row'} justifyContent={'space-evenly'} >
                        <Text>Last month</Text>
                        <Text>This month</Text>
                    </View>
                </View>



                <Text fontSize={'md'} color={'gray.500'}>Most expensive</Text>
            </View>

        </Box>
    );
};
