import React from "react";
import { StyleSheet, TextStyle, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import AppText from "./Text";

interface Props {
  title: string;
  onPress?: () => void;
  cssProp?: TextStyle;
  disabled?: boolean;
}

const AppButton = ({ title, onPress, cssProp, disabled }: Props) => {
  return (
    <TouchableOpacity style={[ styles.button, cssProp, disabled && { backgroundColor: colors.lightGrey } ]} onPress={onPress} disabled={disabled}>
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
