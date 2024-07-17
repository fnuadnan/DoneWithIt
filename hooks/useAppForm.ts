import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const useAppForm = (schema: z.ZodObject<any, any, any>) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    reset(); // Optionally reset the form after submission
  };

  return { control, handleSubmit, onSubmit, errors };
};

export default useAppForm;

// This is a custom hook that uses the useForm hook from react-hook-form to manage form state.
// It takes a schema as an argument and uses zodResolver to validate the form data.
