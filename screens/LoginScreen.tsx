import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen cssProp={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppTextInput
        icon="email"
        textProps={{
          autoCapitalize: "none",
          autoCorrect: false,
          keyboardType: "email-address",
          placeholder: "Email",
          textContentType: "emailAddress",
          onChangeText: (text: string) => {
            setEmail(text);
          },
        }}
      />
      <AppTextInput
        icon="lock"
        textProps={{
          autoCapitalize: "none",
          autoCorrect: false,
          placeholder: "Password",
          secureTextEntry: true,
          textContentType: "password",
          onChangeText: (text: string) => {
            setPassword(text);
          },
        }}
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
