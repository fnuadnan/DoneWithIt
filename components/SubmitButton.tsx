import React from "react";
import { StyleSheet } from "react-native";
import AppButton from "./AppButton";

interface SubmitButtonProps {
  title: string;
  handleSubmit: () => void;
}

const SubmitButton = ({ title, handleSubmit }: SubmitButtonProps) => {
  return <AppButton title={title} onPress={handleSubmit} />;
};

export default SubmitButton;

const styles = StyleSheet.create({});
