import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

const ListItemSeparator = () => {
  return <View style={styles.separator}></View>;
};

export default ListItemSeparator;

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});

// This is a reusable component that renders a separator between list items.
