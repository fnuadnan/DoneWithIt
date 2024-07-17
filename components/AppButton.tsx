import React from "react";
import { StyleSheet, TextStyle, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

interface Props {
  title: React.ReactNode;
  onPress?: () => void;
  cssProp?: TextStyle;
}

const AppButton = ({ title, onPress, cssProp }: Props) => {
  return (
    <TouchableOpacity style={[styles.button, cssProp]} onPress={onPress}>
      <AppText cssProp={styles.text}>{title}</AppText>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 60,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

// This is the AppButton component.
// It's a simple button component that takes
//      title: string
//      onPress: function
//      cssProp:  object
//  The title prop is the text that will be displayed on the button.
//  The onPress prop is a function that will be called when the button is pressed. 
//  The cssProp prop is an object that can be used to style the button.
