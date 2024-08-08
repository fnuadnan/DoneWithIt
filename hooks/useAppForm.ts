import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Callbacks, Listings } from "../entities";
import usePost from "./usePost";

const useAppForm = (schema: any, { onSuccess, onError }: Callbacks) => {
  const { post } = usePost();
  const { control, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<Listings>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: Listings) => {
    const success = await post(data);
    if (success) {
      reset(); // Optionally reset the form after submission
      onSuccess();
    } else {
      onError("Error posting data");
    }
  };

  return { control, handleSubmit, onSubmit, errors, isSubmitting };
};

export default useAppForm;

// This is a custom hook that uses the useForm hook from react-hook-form to manage form state.
// It takes a schema as an argument and uses zodResolver to validate the form data.
// It also takes an object with onSuccess and onError callbacks.
