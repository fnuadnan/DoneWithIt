import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import background from "../assets/background.jpg";
import logo from "../assets/logo-red.png";
import AppButton from "../components/Button";
import AppText from "../components/Text";
import colors from "../config/colors";
import routes from "../navigation/routes";

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <AppText cssProp={styles.text}>Sell What You Don't Need</AppText>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
          cssProp={styles.loginButton}
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title="Register"
          cssProp={styles.registerButton}
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
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
  loginButton: {
    backgroundColor: colors.primary,
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: colors.secondary,
  },
  text: {
    color: colors.black,
    fontSize: 25,
    fontWeight: "900",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
