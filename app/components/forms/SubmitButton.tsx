import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import AppButton from "../Button";

interface SubmitButtonProps {
  title: string;
  handleSubmit: () => void;
  cssProp?: ViewStyle;
}

const SubmitButton = ({ title, handleSubmit, cssProp }: SubmitButtonProps) => {
  return <AppButton title={title} onPress={handleSubmit} cssProp={cssProp} />;
};

export default SubmitButton;

const styles = StyleSheet.create({});

// This is a simple component that renders an AppButton pass as props with the:
//      title
//      onPress
//      cssProp
