import React from "react";
import { StyleSheet } from "react-native";
import ListItem from "./components/ListItem";

export default function App() {
  return (
    <ListItem
      title="My Title"
      subTitle="My Subtitle"
      image={require("./assets/mosh.jpg")}
    />
  );
}

const styles = StyleSheet.create({});
