import React from "react";
import { Alert } from "react-native";
import { z } from "zod";
import { AppFormField, SubmitButton } from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import Screen from "../components/Screen";
import useAppForm from "../hooks/useAppForm";
import UploadScreen from "./UploadScreen";

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  price: z.string().min(1, "Price must be greater than 0"),
  category: z.string().min(1, "Category is required"),
  description: z.string().min(1, "Description is required"),
  images: z.array(z.string()).min(1, "Please select at least one image"),
});

const ListingEditScreen = ({ navigation }: any) => {
  // onSuccess and onError callbacks
  const callbacks = {
    onSuccess: () => {
      navigation.navigate("Listings");
      console.log("Listing posted successfully");
    },
    onError: (error: string) => {
      Alert.alert("Error", error);
    },
  };

  const { control, handleSubmit, onSubmit, isSubmitting } = useAppForm(schema, callbacks);

  return (
    <Screen>
      <FormImagePicker control={control} name="images" />
      <AppFormField
        control={control}
        name="title"
        textProps={{ placeholder: "Title" }}
      />
      <AppFormField
        control={control}
        name="price"
        textProps={{ placeholder: "Price" }}
        width={120}
      />
      {/* <AppFormPicker
        control={control}
        name="category"
        items={items}
        PickerItemComponent={CategoryPickerItem}
        numberOfColumns={3}
        placeholder="Category"
        width="50%"
      /> */}
      <AppFormField
        control={control}
        name="category"
        textProps={{ placeholder: "Category" }}
      />
      <AppFormField
        control={control}
        name="description"
        textProps={{ placeholder: "Description" }}
      />
      <SubmitButton title="Post" handleSubmit={handleSubmit(onSubmit)} />

      {/* Progress screen */}
      {isSubmitting && <UploadScreen visible={isSubmitting} />}
    </Screen>
  );
};

export default ListingEditScreen;

// this compoennt when submitting shows uploadScreen component after navigates