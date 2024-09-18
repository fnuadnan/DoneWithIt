import React from "react";
import { StyleSheet, View } from "react-native";
import { z } from "zod";
import Screen from "../components/Screen";
import { AppFormField, SubmitButton } from "../components/forms";
import ImagePicker from "../components/forms/ImagePicker";
import useAppForm from "../hooks/useAppForm";
import useUser from "../services/hooks/useUser";

const EditProfileScreen = () => {
  // get the user object from the custom hook
  const { user } = useUser();

  // get the control, handleSubmit and onSubmit function from the custom hook
  const { control, handleSubmit, onSubmit } = useAppForm({ schema }); 


  return (
    <Screen>
      <View style={styles.container}>
        <ImagePicker image={user?.icon ?? ""} styleProp={{ width: 200, height: 200, borderRadius: 50 }} />
        <View style={{ width: "100%", marginVertical: 25, padding: 5 }}>
          <AppFormField name="name" control={control} icon="account" textProps={{ defaultValue: user?.name}}/>
          <AppFormField name="email" control={control} icon="email" textProps={{ defaultValue: user?.email }} keyboardType="email-address" />
        </View>
        <SubmitButton title="Update" handleSubmit={handleSubmit(onSubmit)} cssProp={{ width: "60%", marginTop: 15 }} />
      </View>
    </Screen>
  );
};

const schema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
});

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
    padding: 15,
  },
});
