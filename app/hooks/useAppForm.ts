import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useStore from "../store";

const useAppForm = <T extends {}>( schema: any ) => {
  const { isSubmitting, setSubmitting } = useStore((state) => ( { isSubmitting: state.isSubmitting, setSubmitting: state.setSubmitting }));
  const { control, handleSubmit, reset, formState: { errors } } = useForm<T>({ resolver: zodResolver(schema) });


  return { control, handleSubmit, errors, isSubmitting, reset, setSubmitting };
};

export default useAppForm;

// come back look the Listing in userform