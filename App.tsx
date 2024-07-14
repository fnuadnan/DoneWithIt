import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AppTextInput from "./components/AppTextInput";
import Screen from "./components/Screen";

export default function App() {
  const [firstName, setFirstName] = useState("");
  console.log(firstName);

  return (
    <Screen>
      <AppTextInput icon="email" textProps={{ placeholder: "email" }} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});
