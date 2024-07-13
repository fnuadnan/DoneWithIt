import React from "react";
import { StyleSheet } from "react-native";
import MyAccountScreen from "./screens/AccountScreen";

export default function App() {
  return (
    <>
      <MyAccountScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});
