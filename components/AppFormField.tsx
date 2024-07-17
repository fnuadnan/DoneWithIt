import React from "react";
import { Control, Controller } from "react-hook-form";
import { IconName, textProps } from "../entities";
import AppTextInput from "./AppTextInput";
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
//
