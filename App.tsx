import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Category } from "./entities";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  const [category, setCategory] = useState<Category | undefined>(undefined);
  return <LoginScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});
