import Constants from "expo-constants";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

interface Props {
  children: React.ReactNode;
  cssProp?: object;
}

const Screen = ({ children, cssProp }: Props) => {
  return (
    <SafeAreaView style={[styles.screen, cssProp]}>
      <View style={[styles.view, cssProp]}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight, // or Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  view: {
    flex: 1,
  },
});

// This is a simple component that wraps its children with a SafeAreaView component.
