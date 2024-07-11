import React from "react";
import { Platform, StyleSheet, Text, TextStyle } from "react-native";

interface Props {
  children: React.ReactNode; // Required prop for the text
  cssProp?: TextStyle; // Optional prop for custom styles
}

export default function AppText({ children, cssProp }: Props) {
  return <Text style={[styles.text, cssProp]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    ...Platform.select({
      ios: { fontFamily: "Avenir", fontSize: 20 },
      android: { fontFamily: "Roboto", fontSize: 18 },
    }),
  },
});

// This is a simple component that renders a Text component with some default styles.
// The component accepts two props:
//    children: This is the text that will be rendered.
//    cssProp: This is an optional prop that allows us to pass custom styles to the Text component.
