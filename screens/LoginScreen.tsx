import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Image, StyleSheet } from "react-native";
import { z } from "zod";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "../components/ErrorMessage";
import Screen from "../components/Screen";

const LoginScreen = () => {
  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: any) => {
    console.log(data);
    reset(); // Optionally reset the form after submission
  };
  return (
    <Screen cssProp={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
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
            <ErrorMessage error={error?.message} />
          </>
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
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
            <ErrorMessage error={error?.message} />
          </>
        )}
      />
      <AppButton title="Login" onPress={handleSubmit(onSubmit)} />
    </Screen>
  );
};
const schema = z.object({
  email: z.string().email("Invalid email").min(5, "Email is too short"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

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
