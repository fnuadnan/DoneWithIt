import React from "react";
import { Image, StyleSheet, View } from "react-native";
import chair from "../assets/chair.jpg";
import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image source={chair} style={{ height: "100%", width: "100%", resizeMode: "contain" }}/>
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  closeIcon: {
    width: 50,
    height: 50, 
    position: "absolute",
    top: 60,
    left: 30,
    backgroundColor: colors.primary,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 60,
    right: 30,
    backgroundColor: colors.secondary,
  },
});
