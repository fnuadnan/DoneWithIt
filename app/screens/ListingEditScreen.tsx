import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { Alert, View } from "react-native";
import { z } from "zod";
import CategoryPickerItem from "../components/CategoryPickerItem";
import { AppFormField, SubmitButton } from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import AppFormPicker from "../components/forms/FormPicker";
import Screen from "../components/Screen";
import { categories } from "../data";
import { Listing } from "../entities";
import useAppForm from "../hooks/useAppForm";
import usePostListing from "../services/hooks/usePostListing";
import UploadScreen from "./UploadScreen";

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  price: z
    .string()
    .min(1, "Price is required") // Ensure the input is not empty
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Price must be greater than 0",
    }) // Ensure it's a valid number and greater than 0
    .transform((val) => Number(val)), // Convert the input to a number
  category: z.string().min(1, "Category is required"),
  description: z.string().min(1, "Description is required"),
  images: z.array(z.string()).min(1, "Please select at least one image"),
});

const ListingEditScreen = ({ navigation }: any) => {
  const { post } = usePostListing();
  const { control, handleSubmit, isSubmitting, reset, setSubmitting } = useAppForm<Listing>(schema);

  // Handle form submission
  const onSubmit = async (data: Listing) => {
    setSubmitting(true); // Manually set isSubmitting to true before submission

    const success = await post(data);
    if (success) {
      navigation.navigate("Listings");
      console.log("Listing posted successfully");
    } else {
      Alert.alert("Error", "Error posting data");
      console.log("Error posting listing");
    }

    // if the code reaches this point, the submission is complete and isSubmitting should be set
    // to false  while simulating a delay to show the loading spinner in the UI
    setTimeout(() => {
      setSubmitting(false);
    }, 6000);
  };

  // Reset form on screen focus: // Reset form when screen is focused
  useFocusEffect(
    React.useCallback(() => {
      reset();
    }, [reset])
  );

  return (
    <Screen>
      <View style={{ padding: 15 }}>
        <FormImagePicker control={control} name="images" />
        <AppFormField control={control} name="title" textProps={{ placeholder: "Title" }} />
        <AppFormField control={control} name="price" textProps={{ placeholder: "Price" }} width={120} keyboardType="numeric" />
        <AppFormPicker control={control} name="category" items={categories} PickerItemComponent={CategoryPickerItem} numberOfColumns={3}  placeholder="Category" width="50%" />
        <AppFormField  control={control} name="description" textProps={{ placeholder: "Description" }} />
        <SubmitButton cssProp={{ marginTop: 30 }} title="Post" handleSubmit={handleSubmit(onSubmit)}/>
        {/* Progress screen */}
        {isSubmitting && <UploadScreen visible={isSubmitting} />}
      </View>
    </Screen>
  );
};

export default ListingEditScreen;

