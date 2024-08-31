import React from "react";
import { StyleSheet } from "react-native";
import { z } from "zod";
import Screen from "../components/Screen";
import { AppFormField, SubmitButton } from "../components/forms";
import useAppForm from "../hooks/useAppForm";

const RegisterScreen = () => {
  const { control, handleSubmit, onSubmit } = useAppForm(schema);
  return (
    <Screen>
      <AppFormField
        name="name"
        icon="account"
        control={control}
        textProps={{
          autoCapitalize: "none",
          placeholder: "Name",
          autoCorrect: false,
        }}
      />
      <AppFormField
        name="email"
        icon="email"
        control={control}
        textProps={{
          autoCapitalize: "none",
          placeholder: "Email",
          autoCorrect: false,
        }}
      />
      <AppFormField
        name="password"
        icon="lock"
        control={control}
        textProps={{
          autoCapitalize: "none",
          placeholder: "Password",
          autoCorrect: false,
          secureTextEntry: true,
        }}
      />
      <SubmitButton title="Register" handleSubmit={handleSubmit(onSubmit)} />
    </Screen>
  );
};

const schema = z.object({
  name: z.string(),
  email: z.string().email("Invalid email").nonempty("Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default RegisterScreen;

const styles = StyleSheet.create({});
