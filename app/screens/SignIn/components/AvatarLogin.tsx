import { Avatar, VStack, Text } from "native-base";
import React from "react";
import { ImageSourcePropType } from "react-native";

type Props = {
  name: string;
  source?: ImageSourcePropType;
  isActive: boolean;
};
export const AvatarLogin = (props: Props) => {
  const { isActive, source, name } = props;
  return (
    <VStack alignItems="center" space="sm">
      <Text color="white" bold={isActive}>
        {name}
      </Text>
      <Avatar
        size="20"
        source={source}
        {...(isActive && {
          borderColor: "orange.600",
          borderWidth: "2",
        })}
      ></Avatar>
    </VStack>
  );
};
