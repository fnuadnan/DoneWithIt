import Constants from "expo-constants";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

interface Props {
  children: React.ReactNode;
}

const Screen = ({ children }: Props) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    paddingTop: Constants.statusBarHeight, // or Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

// This is a simple component that wraps its children with a SafeAreaView component.
