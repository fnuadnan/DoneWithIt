import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import Screen from "./components/Screen";

export default function App() {
  const [firstName, setFirstName] = useState("");
  console.log(firstName);

  return (
    <Screen>
      <TextInput
        secureTextEntry
        clearButtonMode="always"
        keyboardType="numeric"
        style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
        placeholder="First Name"
        onChangeText={(text) => setFirstName(text)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});
