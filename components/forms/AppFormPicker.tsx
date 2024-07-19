// AppFormPicker.js
import React from "react";
import { Control, Controller } from "react-hook-form";
import { DimensionValue } from "react-native";
import { Category, IconName } from "../../entities";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

interface Props {
  items: Category[];
  name: string;
  control: Control<any>;
  placeholder: string;
  icon?: IconName;
  width?: DimensionValue;
}

const AppFormPicker = ({
  items,
  name,
  control,
  placeholder,
  icon,
  width = "100%",
}: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <AppPicker
            items={items}
            icon={icon}
            placeholder={placeholder}
            onSelectItem={(item) => onChange(item.value)}
            selectedItem={items.find((item) => item.value === value)}
            width={width}
          />
          {error && <ErrorMessage error={error.message} />}
        </>
      )}
    />
  );
};

export default AppFormPicker;

// This is a reusable component for a form picker field.
// It uses the Controller component from react-hook-form to manage the form state.
// The AppFormPicker component takes the following props:
//      items: The list of items to display in the picker.
//      name: The name of the field in the form.
//      control: The control object from react-hook-form.
//      placeholder: The placeholder text for the picker.
//      icon: The name of the icon to display next to the picker.
