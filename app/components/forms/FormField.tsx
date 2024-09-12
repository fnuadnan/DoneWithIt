import React from "react";
import { Control, Controller } from "react-hook-form";
import { DimensionValue } from "react-native";
import { IconName, textProps } from "../../entities";
import AppTextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";

interface AppFormFieldProps {
  icon?: IconName;
  textProps?: textProps;
  name: string;
  control: Control<any>;
  width?: DimensionValue;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad"; // Fix prop name here
}

const AppFormField = ({ icon, textProps, name, control, width, keyboardType }: AppFormFieldProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          <AppTextInput
            width={width}
            icon={icon}
            textProps={{
              ...textProps,
              keyboardType: keyboardType || "default", // Correct prop to lowercase
              onChangeText: (text) => {
                if (keyboardType === "numeric") {
                  // Convert the input value to a number before passing it to onChange
                  const numericValue = text.replace(/[^0-9]/g, '');
                  onChange(numericValue); // Convert string to number
                } else {
                  onChange(text);
                }
              },
              value,
              onBlur,
            }}
          />

          {error && <ErrorMessage error={error.message} />}
        </>
      )}
    />
  );
};

export default AppFormField;

// This is component for a form field that includes an icon and an input field.
// It uses the Controller component from react-hook-form to manage the form state.
// The AppFormField component takes the following props:
//      icon: The name of the icon to display.
//      textProps: The props to pass to the AppTextInput component.
//      name: The name of the field in the form.
//      control: The control object from react-hook-form.
// The component renders the AppTextInput component with the specified icon and textProps,
// and uses the Controller component to manage the form state for the field.
// It also renders an ErrorMessage component if there is an error for the field.
