import React from "react";
import { StyleSheet } from "react-native";
import AppText from "../AppText";

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

// This is a simple component that displays an error message.
// If the error prop is not passed, it returns null.
// Otherwise, it displays the error message in red text.
