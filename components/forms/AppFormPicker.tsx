// AppFormPicker.js
import React from "react";
import { Control, Controller } from "react-hook-form";
import { Category, IconName } from "../../entities";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

interface Props {
  items: Category[];
  name: string;
  control: Control<any>;
  placeholder: string;
  icon?: IconName;
}

const AppFormPicker = ({ items, name, control, placeholder, icon }: Props) => {
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
          />
          {error && <ErrorMessage error={error.message} />}
        </>
      )}
    />
  );
};

export default AppFormPicker;
