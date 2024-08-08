import LottieView from "lottie-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";

interface Props {
  visible: boolean;
}

const ActivityIndicator = ({ visible = false }: Props) => {
  if (!visible) return null;
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={{
          width: 400,
          height: 400,
        }}
        loop
        source={require("../assets/animations/loader.json")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ActivityIndicator;
