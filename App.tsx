import React from "react";
import { StyleSheet } from "react-native";
import ListingsScreen from "./screens/ListingsScreen";

export default function App() {
  return (
    <>
      <ListingsScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});
