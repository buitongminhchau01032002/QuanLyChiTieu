import { extendTheme, useColorModeValue } from "native-base";
import { useColorScheme as _useColorScheme } from "react-native";

export const useBackgroundColor = () => {
  const tabBar = useColorModeValue("warmGray.50", "coolGray.800");
  const screen = useColorModeValue("warmGray.100", "coolGray.700");
  return {
    tabBarBackground: tabBar,
    screenBackground: screen,
  };
};

// use for custom and apply native-base theme
export const useCustomNativeBaseColor = () => {
  return extendTheme({
    colors: {
      // Add new color
      primary: {
        50: "#E3F2F9",
        100: "#C5E4F3",
        200: "#B8E1F4",
        300: "#A7DAF1",
        400: "#95D2EE",
        500: "#83CBEC",
        600: "#72C3E9",
        700: "#60BCE6",
        800: "#4FB4E3",
        900: "#2FA6DE",
      },
      orange: {
        50: "#F7CDA1",
        100: "#F5C48E",
        200: "#F4BA7C",
        300: "#F2B069",
        400: "#F0A656",
        500: "#EF9C43",
        600: "#EC8F2A",
        700: "#FB881E",
        800: "#E17E14",
        900: "#CE7312",
      },
      error: {
        50: "#FFC2C2  ",
        100: "#FFADAD",
        200: "#FF9999",
        300: "#FF8585",
        400: "#FF7070",
        500: "#FF5C5C",
        600: "#FF4747",
        700: "#FF3333",
        800: "#FF1F1F",
        900: "#FF0000",
      },
      // Redefining only one shade, rest of the color will remain same.
      // amber: {
      //   400: "#d97706",
      // },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: "light",
    },
  });
};
