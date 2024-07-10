import React from "react";
import { Image, ImageBackground, SafeAreaView, StyleSheet, View, Text } from "react-native";
import background from "../assets/background.jpg";
import logo from "../assets/logo-red.png";


const WelcomeScreen = () => {
  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo}/>
        <Text>Sell What You Don't Nedd</Text>
      </View>
      <View style={{ height: 100, width: "100%", backgroundColor: "#fc5c65" }}></View> 
      <View style={{ height: 100, width: "100%", backgroundColor: "#4ecdc4" }}></View> 
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});

export default WelcomeScreen;
