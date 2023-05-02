import { Container, Box, Text, Flex, Avatar, Stack, VStack, Badge, Pressable, HStack, View, Icon } from "native-base";
import { APP_PADDING } from "app/constants/Layout";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
type Props = {
    title: string;
    text: string;
    isActive: boolean;
} & React.ComponentProps<typeof Box>;

export const NotificationItem = (props: Props) => {
    const { title, text, isActive, ...hsProps } =
        props;
    return (
        <Stack direction="row" space={4} px={1} borderBottomWidth={1} borderBottomColor={"#d8d8d8"} borderBottomStyle={"solid"}>
            <VStack w={"50"} py={4}>
                {/* <Badge
          colorScheme="danger" display="none" rounded="full" w={4} h={4} mb={-4} mr={-2} p={0} zIndex={1} variant="solid" alignSelf="flex-end" _text={{
            fontSize: 12,
            fontWeight: 600,
          }}
          {...(isActive && {
            display: "flex",
          })}
          >
            2
        </Badge> */}
                <Icon as={<FontAwesome name="bell" />} size={6} color="black" marginLeft={4}  />
            </VStack>
            <VStack flex="1" space={2} py={2}>
                <Text fontSize="sm" fontWeight="400" >{title}</Text>
                <Text fontSize="xs" 
                    {...(isActive && {
                        fontWeight: "600",
                    })}
                >{text}</Text>
                 <Text textAlign={'right'} fontSize={12} color={"#777"}>about a year ago</Text>
            </VStack>
        </Stack>
    );
};
