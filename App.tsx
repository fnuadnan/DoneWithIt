import React from "react";
import { StyleSheet } from "react-native";
import Card from "./components/Card";

export default function App() {
  return (
    <Card
      title="Red jacket for sale"
      subTitle="$100"
      image={require("./assets/jacket.jpg")}
    />
  );
}

const styles = StyleSheet.create({});
