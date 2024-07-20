import React from "react";
import { z } from "zod";
import CategoryPickerItem from "../components/CategoryPickerItem";
import { AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";
import Screen from "../components/Screen";
import { items } from "../data";
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
        items={items}
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
