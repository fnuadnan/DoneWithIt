import React from "react";
import { StyleSheet } from "react-native";
import AppPicker from "./components/AppPicker";
import AppTextInput from "./components/AppTextInput";
import Screen from "./components/Screen";
import { categories } from "./entities";

export default function App() {
  return (
    <Screen>
      <AppPicker items={categories} icon="apps" placeholder="Category" />
      <AppTextInput icon="email" textProps={{ placeholder: "Email" }} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});
