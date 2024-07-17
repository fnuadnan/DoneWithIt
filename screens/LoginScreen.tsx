import React from "react";
import { Image, StyleSheet } from "react-native";
import AppFormField from "../components/AppFormField";
import Screen from "../components/Screen";
import SubmitButton from "../components/SubmitButton";
import useAppForm from "../hooks/useAppForm";

const LoginScreen = () => {
  const { control, handleSubmit, onSubmit } = useAppForm();
  return (
    <Screen cssProp={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppFormField
        control={control}
        icon="email"
        name="email"
        textProps={{
          autoCapitalize: "none",
          autoCorrect: false,
          keyboardType: "email-address",
          placeholder: "Email",
          textContentType: "emailAddress",
        }}
      />
      <AppFormField
        control={control}
        icon="lock"
        name="password"
        textProps={{
          autoCapitalize: "none",
          autoCorrect: false,
          placeholder: "Password",
          secureTextEntry: true,
          textContentType: "password",
        }}
      />
      <SubmitButton title="Login" handleSubmit={handleSubmit(onSubmit)} />
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
