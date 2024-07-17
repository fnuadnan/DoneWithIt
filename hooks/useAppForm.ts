import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid email").min(5, "Email is too short"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const useAppForm = () => {
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
