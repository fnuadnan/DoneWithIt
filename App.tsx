import React from "react";
import { StyleSheet, View } from "react-native";
import MessagesScreen from "./screens/MessagesScreen";

export default function App() {
  return (
    <View>
      <MessagesScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});
