import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import AppButton from "../Button";

interface SubmitButtonProps {
  title: string;
  handleSubmit: () => void;
  cssProp?: ViewStyle;
  disabled?: boolean;
}

const SubmitButton = ({ title, handleSubmit, cssProp, disabled }: SubmitButtonProps) => {
  return <AppButton title={title} onPress={handleSubmit} cssProp={cssProp} disabled={disabled}/>;
};

export default SubmitButton;

const styles = StyleSheet.create({});
