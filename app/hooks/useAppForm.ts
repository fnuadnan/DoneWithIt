import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Callbacks, Listing } from "../entities";
import useStore from "../store";
import usePost from "./usePost";

const useAppForm = (schema: any, callbacks?: Callbacks) => {
  const { post } = usePost();
  const { isSubmitting, setSubmitting } = useStore((state) => ( { isSubmitting: state.isSubmitting, setSubmitting: state.setSubmitting }));
  const { control, handleSubmit, reset, formState: { errors } } = useForm<Listing>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: Listing) => {
    setSubmitting(true); // Manually set isSubmitting to true before submission

    const success = await post(data);
    if (success) {
      reset(); // Optionally reset the form after submission
      callbacks?.onSuccess && callbacks.onSuccess(); // Check if onSuccess is defined before calling
    } else {
      callbacks?.onError && callbacks.onError("Error posting data"); // Check if onError is defined before calling
    }

    // if the code reaches this point, the submission is complete and isSubmitting should be set
    // to false  while simulating a delay to show the loading spinner in the UI
    setTimeout(() => {
      setSubmitting(false);
    }, 6000);
  };

  return { control, handleSubmit, onSubmit, errors, isSubmitting };
};

export default useAppForm;

// This is a custom hook that uses the useForm hook from react-hook-form to manage form state.
// It takes a schema as an argument and uses zodResolver to validate the form data.
// It also takes an object with onSuccess and onError callbacks.
// It returns the control, handleSubmit, onSubmit, and isSubmitting properties.
