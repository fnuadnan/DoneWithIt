import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Image, StyleSheet } from "react-native";
import AppButton from "./components/AppButton";
import AppTextInput from "./components/AppTextInput";
import Screen from "./components/Screen";

export default function App() {
  const { control, handleSubmit } = useForm();
  return (
    <Screen cssProp={styles.container}>
      <Image style={styles.logo} source={require("./assets/logo-red.png")} />
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <AppTextInput
            icon="email"
            textProps={{
              autoCapitalize: "none",
              autoCorrect: false,
              keyboardType: "email-address",
              placeholder: "Email",
              textContentType: "emailAddress",
              onChangeText: onChange,
              value: value,
            }}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <AppTextInput
            icon="lock"
            textProps={{
              autoCapitalize: "none",
              autoCorrect: false,
              placeholder: "Password",
              secureTextEntry: true,
              textContentType: "password",
              onChangeText: onChange,
              value: value,
            }}
          />
        )}
      />
      <AppButton
        title="Login"
        onPress={handleSubmit((data) => console.log(data))}
      />
    </Screen>
  );
}

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
  error: {
    color: "red",
    alignSelf: "center",
  },
});
