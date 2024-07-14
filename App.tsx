import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AppPicker from "./components/AppPicker";
import AppTextInput from "./components/AppTextInput";
import Screen from "./components/Screen";

export default function App() {
  const [isNew, setIsNew] = useState(false);
  console.log(isNew);

  return (
    <Screen>
      <AppPicker icon="apps" placeholder="Category" />
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
