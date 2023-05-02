import { AppBar } from "components/AppBar";
import { Button, Center, Flex, Stack } from "native-base";
import { AppTabsNavigationKey, RootNavigatekey } from "navigation/navigationKey";
import React from "react";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native-gesture-handler";
import { AppTabsStackScreenProps } from "types";
import { NotificationItem } from "./components/NotificationItem";

export const NotificationScreen = (
  // props: AppTabsStackScreenProps<AppTabsNavigationKey.Home>
) => {
  const { t } = useTranslation();
  return (
    <Flex>
     
      <Stack>
        <ScrollView>
          <NotificationItem title="Hannah Baker Hannah Baker Hannah Baker Hannah Baker Hannah Baker Hannah Baker Hannah Baker" text="Today, kid goes to school very well, this is Today, kid goes to school very well, this is" isActive={true} />
          <NotificationItem title="Emily Lover" text="You: Can you go to meetings at the weekend?" isActive={false} />
          <NotificationItem title="Rabbit classes" text="You: Can you go to meetings at the weekend?" isActive={false} />
          <NotificationItem title="Elena Kosh (assistant principals)" text="Your kid are sick, you need to pay more " isActive={false} />
          {/* <Button
            onPress={() => {
              // props.navigation.navigate(RootNavigatekey.MessageDetail);
            }}
          >
            Navigate to Message Detail (Message of specific user)
          </Button> */}
        </ScrollView>
      </Stack>
    </Flex>
  );
};
