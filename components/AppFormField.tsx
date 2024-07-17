import React from "react";
import { IconName, textProps } from "../entities";
import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

interface AppFormFieldProps {
  error: any;
  icon: IconName;
  textProps?: textProps;
}

const AppFormField = ({ error, icon, textProps }: AppFormFieldProps) => {
  return (
    <>
      <AppTextInput
        icon={icon}
        textProps={{
          ...textProps,
        }}
      />
      <ErrorMessage error={error?.message} />
    </>
  );
};

export default AppFormField;

// This is component for a form field that includes an icon and an input field.
//     takes icon
//     takes error
//     takes textProps (which includes all the props for the input field)