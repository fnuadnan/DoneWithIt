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
