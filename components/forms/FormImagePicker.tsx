import React from "react";
import { Controller } from "react-hook-form";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

interface FormImagePickerProps {
  control: any;
}

const FormImagePicker = ({ control }: FormImagePickerProps) => {
  return (
    <Controller
      control={control}
      name="photo"
      render={({
        field: { onChange, value },
        fieldState: { error, isTouched },
      }) => (
        <>
          <ImageInputList
            imageUris={value || []}
            onAddImage={(uri: string) => onChange([...(value || []), uri])}
            onRemoveImage={(uri: string) =>
              onChange(
                (value || []).filter((imageUri: string) => imageUri !== uri)
              )
            }
          />
          {isTouched && error && <ErrorMessage error={error.message} />}
        </>
      )}
    />
  );
};

// This component is a form for image picker. It uses react-hook-form Controller to handle the state
// The state is handle by react-hook-form (imageUris)

export default FormImagePicker;
