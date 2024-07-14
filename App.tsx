import React, { useState } from "react";
import { StyleSheet, Switch } from "react-native";
import Screen from "./components/Screen";

export default function App() {
  const [isNew, setIsNew] = useState(false);
  console.log(isNew);

  return (
    <Screen>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});
