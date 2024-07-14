import React from "react";
import { Text, TextStyle } from "react-native";
import defaultStyle from "../config/styles";

interface Props {
  children: React.ReactNode; // Required prop for the text
  cssProp?: TextStyle; // Optional prop for custom styles
}

export default function AppText({ children, cssProp }: Props) {
  return <Text style={[defaultStyle.text, cssProp]}>{children}</Text>;
}

// This is a simple component that renders a Text component with some default styles.
// The component accepts two props:
//    children: This is the text that will be rendered.
//    cssProp: This is an optional prop that allows us to pass custom styles to the Text component.
