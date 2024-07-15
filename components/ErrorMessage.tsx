import React from "react";
import { StyleSheet } from "react-native";
import AppText from "./AppText";

interface Props {
  error: string | undefined;
}

const ErrorMessage = ({ error }: Props) => {
  if (!error) return null;

  return <AppText cssProp={styles.error}>{error}</AppText>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
