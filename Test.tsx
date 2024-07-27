import React from "react";
import { useForm } from "react-hook-form";
import { Button, View } from "react-native";
import FormImagePicker from "./components/forms/FormImagePicker";

const Test = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <View>
      <FormImagePicker control={control} />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default Test;
