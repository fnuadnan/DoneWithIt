import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark,
  },
};

// In this snippet, we define the default styles for our app. The styles object has two properties:
//    colors: This is an object that contains all the colors used in the app.
//    text: This is an object that contains the default styles for text components in the app.
