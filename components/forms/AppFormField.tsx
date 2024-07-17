import React from "react";
import { Control, Controller } from "react-hook-form";
import { IconName, textProps } from "../../entities";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

interface AppFormFieldProps {
  icon: IconName;
  textProps?: textProps;
  name: string;
  control: Control<any>;
}

const AppFormField = ({
  icon,
  textProps,
  name,
  control,
}: AppFormFieldProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error, isTouched },
      }) => (
        <>
          <AppTextInput
            icon={icon}
            textProps={{
              ...textProps,
              onChangeText: onChange,
              value,
              onBlur,
            }}
          />

          {isTouched && error && <ErrorMessage error={error.message} />}
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
