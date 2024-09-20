import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import { z } from "zod";
import Screen from "../components/Screen";
import { AppFormField, SubmitButton } from "../components/forms";
import ImagePicker from "../components/forms/ImagePicker";
import { User } from "../entities";
import useAppForm from "../hooks/useAppForm";
import useUser from "../services/hooks/useUser";
import useUpdateUser from "../services/hooks/useUpdateUser";

const EditProfileScreen = ({ navigation }: any) => {
  const { user, refresh } = useUser();
  const { update } = useUpdateUser();
  const { control, handleSubmit, watch, isSubmitting, setSubmitting } = useAppForm<User>(schema);

  // Watch input fields for changes, providing default values for initial comparison
  const name = watch("name", user?.name);  // Default to user's name
  const email = watch("email", user?.email);  // Default to user's email

  // Check if the form values differ from the initial user values
  const hasChanged = (name !== user?.name || email !== user?.email);

const onSubmit = async (data: User) => {
    setSubmitting(true);  // Start submission state

    try {
      const success = await update(data);

      if (success) {
        Alert.alert("Success", "User updated successfully");
        refresh();  // Refresh the user data
        navigation.goBack();
      } else {
        Alert.alert("Error", "There was an error updating the user");
      }

    } catch (error) {
      Alert.alert("Error", "An unexpected error occurred.");
    }
    setSubmitting(false); // End submission state
  };

  return (
    <Screen>
      <View style={styles.container}>
        <ImagePicker image={user?.icon ?? ""} styleProp={{ width: 200, height: 200, borderRadius: 50 }} />
        <View style={{ width: "100%", marginVertical: 25, padding: 5 }}>
          <AppFormField name="name" control={control} icon="account" textProps={{ defaultValue: user?.name}}/>
          <AppFormField name="email" control={control} icon="email" textProps={{ defaultValue: user?.email }} keyboardType="email-address" />
        </View>
        <SubmitButton title="Update" handleSubmit={handleSubmit(onSubmit)} cssProp={{ width: "60%", marginTop: 15 }}  disabled={!hasChanged || isSubmitting}/>
      </View>
    </Screen>
  );
};

const schema = z.object({
  name: z.string().min(3).max(255).optional(),
  email: z.string().email().optional(),
});

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
    padding: 15,
  },
});
