import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary, // primary color for app, usually brand color.
    background: colors.white, // background color for screens.
  },
};
