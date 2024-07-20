import React from "react";
import { z } from "zod";
import CategoryPickerItem from "../components/CategoryPickerItem";
import { AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";
import Screen from "../components/Screen";
import useAppForm from "../hooks/useAppForm";

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  price: z.string().min(1, "Price must be greater than 0"),
  category: z.number().min(1, "Category is required"),
  description: z.string().optional(),
});

const ListingEditScreen = () => {
  const { control, handleSubmit, onSubmit } = useAppForm(schema);
  return (
    <Screen>
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
      <AppFormPicker
        control={control}
        name="category"
        items={[
          {
            label: "Furniture",
            value: 1,
            backgroundColor: "red",
            icon: "apps",
          },
          {
            label: "Clothing",
            value: 2,
            backgroundColor: "green",
            icon: "email",
          },
          {
            label: "Electronics",
            value: 3,
            backgroundColor: "blue",
            icon: "lock",
          },
          {
            label: "Games",
            value: 4,
            icon: "cards",
            backgroundColor: "#26de81",
          },
          {
            label: "Books",
            value: 5,
            icon: "book",
            backgroundColor: "#2bcbba",
          },
          {
            label: "Movies & Music",
            value: 6,
            icon: "headphones",
            backgroundColor: "#45aaf2",
          },
          {
            label: "Sports",
            value: 7,
            icon: "basketball",
            backgroundColor: "#4b7bec",
          },
          {
            label: "Other",
            value: 8,
            icon: "account",
            backgroundColor: "#fc5c65",
          },
          {
            label: "Shoes",
            value: 9,
            icon: "shoe-heel",
            backgroundColor: "#fd9644",
          },
          {
            label: "Beauty",
            value: 10,
            icon: "cards",
            backgroundColor: "#fed330",
          },
        ]}
        PickerItemComponent={CategoryPickerItem}
        numberOfColumns={3}
        placeholder="Category"
        width="50%"
      />
      <AppFormField
        control={control}
        name="description"
        textProps={{ placeholder: "Description" }}
      />
      <SubmitButton title="Post" handleSubmit={handleSubmit(onSubmit)} />
    </Screen>
  );
};

export default ListingEditScreen;
