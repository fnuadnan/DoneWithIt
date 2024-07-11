import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import chair from "../assets/chair.jpg";
import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="close" size={35} color="white" style={styles.closeIcon} />
      <MaterialCommunityIcons name="trash-can-outline" size={35} color="white" style={styles.deleteIcon}/>
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
    position: "absolute",
    top: 50,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 50,
    right: 30,
  },
});
